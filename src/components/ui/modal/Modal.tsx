import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  ModalContainer,
  ModalHeading,
  ModalHeadingWrapper,
  ModalWrapper,
} from "./modal.styled";

type ModalProps = {
  heading: string;
  content: JSX.Element;
};

export const Modal = ({ heading, content }: ModalProps): JSX.Element => {
  const { isActive } = useSelector((state: RootState) => state.modal);
  return (
    <ModalWrapper isActive={!!isActive}>
      <ModalContainer>
        <ModalHeadingWrapper>
          <ModalHeading>{heading}</ModalHeading>
        </ModalHeadingWrapper>
        {content}
      </ModalContainer>
    </ModalWrapper>
  );
};
