import { useDispatch } from "react-redux";
import { CloseIcon, DeleteIcon } from "../../../assets/Icons";
import { setInactive } from "../../../redux/modal/modal";
import { IconButton } from "../../ui/button/button.styled";
import {
  ButtonsWrapper,
  DeleteContent,
  DeleteWrapper,
} from "./delete-modal.styled";

export const DeleteModal = () => {
  const dispatch = useDispatch();
  const HandleCloseModal = () => dispatch(setInactive());

  return (
    <DeleteWrapper>
      <DeleteContent>Are you sure about deleting this task?</DeleteContent>
      <ButtonsWrapper>
        <IconButton buttonType="red" onClick={HandleCloseModal}>
          <DeleteIcon />
          Delete
        </IconButton>
        <IconButton buttonType="grey" onClick={HandleCloseModal}>
          <CloseIcon />
          Close
        </IconButton>
      </ButtonsWrapper>
    </DeleteWrapper>
  );
};
