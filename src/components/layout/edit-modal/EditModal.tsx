import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AddTaskIcon, CloseIcon } from "../../../assets/Icons";
import { setInactive } from "../../../redux/modal/modal";
import { IconButton } from "../../ui/button/button.styled";
import { Input } from "../../ui/input/input.styled";
import {
  ButtonsWrapper,
  DragFileElement,
  EditWrapper,
  Form,
  ImageUpload,
  UploadButton,
  UploadContent,
  UploadInput,
} from "./edit-modal.styled";

const handleFile = (files: any) => {
  alert("Number of files: " + files.length);
};

export const EditModal = () => {
  const dispatch = useDispatch();

  const HandleCloseModal = () => dispatch(setInactive());

  const [dragActive, setDragActive] = React.useState(false);

  const inputRef = React.useRef(null);

  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (
      (e.dataTransfer as DataTransfer).files &&
      (e.dataTransfer as DataTransfer).files?.length
    ) {
      const target = e.dataTransfer as DataTransfer;
      const files: FileList = target.files;
      handleFile(files);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (
      (e.target as HTMLInputElement).files &&
      (e.target as HTMLInputElement).files?.length
    ) {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      handleFile(file);
    }
  };

  const onButtonClick = () => {
    const cur: any = inputRef.current;
    cur.click();
  };

  return (
    <EditWrapper>
      <Form
        onDragEnter={(e: React.DragEvent<HTMLFormElement>) => handleDrag(e)}
        onSubmit={(e) => e.preventDefault()}
        id="form-file-upload"
      >
        <UploadInput
          id="form-file-upload"
          type="file"
          ref={inputRef}
          multiple={true}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <ImageUpload isActive={dragActive}>
          <UploadContent>
            Drag image or{"  "}
            <UploadButton onClick={onButtonClick}>click here</UploadButton> to
            upload
          </UploadContent>
        </ImageUpload>
        {dragActive && (
          <DragFileElement
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}
          />
        )}
      </Form>
      <Input placeholder="Your todo text" isCentered={true}></Input>
      <ButtonsWrapper>
        <IconButton buttonType="default" onClick={HandleCloseModal}>
          <AddTaskIcon />
          Confirm
        </IconButton>
        <IconButton buttonType="red" onClick={HandleCloseModal}>
          <CloseIcon fill="#F56497" />
          Close
        </IconButton>
      </ButtonsWrapper>
    </EditWrapper>
  );
};
