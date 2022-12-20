import { useDispatch } from "react-redux";
import { AddTaskIcon, CloseIcon } from "../../../assets/Icons";
import { setInactive } from "../../../redux/modal/modal";
import { IconButton } from "../../ui/button/button.styled";
import {
  AddButton,
  ButtonsWrapper,
  EditWrapper,
  ImageUpload,
  UploadButton,
  UploadContent,
} from "./edit-modal.styled";

export const EditModal = () => {
  const dispatch = useDispatch();

  const HandleCloseModal = () => dispatch(setInactive());

  return (
    <EditWrapper>
      <ImageUpload>
        <UploadContent>
          Drag image or <UploadButton>click here</UploadButton> to upload
        </UploadContent>
      </ImageUpload>
      <AddButton>Your todo text</AddButton>
      <ButtonsWrapper>
        <IconButton buttonType="default" onClick={HandleCloseModal}>
          <AddTaskIcon />
          Add task
        </IconButton>
        <IconButton buttonType="red" onClick={HandleCloseModal}>
          <CloseIcon fill="#F56497" />
          Close
        </IconButton>
      </ButtonsWrapper>
    </EditWrapper>
  );
};
