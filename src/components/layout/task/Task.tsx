import React, { useState } from "react";

import {
  TaskDataWrapper,
  TaskWrapper,
  TaskName,
  TaskDate,
  TaskContainerWrapper,
  OptionsButton,
  TaskMenuContent,
  TaskMenuItem,
  OptionsContainer,
  TaskTitleContainer,
  Checkbox,
} from "./Task.styled";
import {
  OptionsIcon,
  DefaultTaskImg,
  EditIcon,
  DeleteIcon,
  CheckedCheckbox,
  Unchecked,
} from "../../../assets/Icons";
import { Modal } from "../../ui/modal/Modal";
import { DeleteModal } from "../delete-modal/DeleteModal";
import { useDispatch } from "react-redux";
import { setActive } from "../../../redux/modal/modal";

export const Task = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleChangeIsDone = () => setIsDone(!isDone);

  //onclick
  return (
    <>
      <TaskWrapper onMouseLeave={() => setIsMenuOpen(false)}>
        <TaskContainerWrapper>
          <DefaultTaskImg />
          <TaskDataWrapper>
            <TaskTitleContainer>
              <TaskName>Task1</TaskName>
              <Checkbox onClick={handleChangeIsDone}>
                {isDone ? <CheckedCheckbox /> : <Unchecked />}
              </Checkbox>
            </TaskTitleContainer>
            <TaskDate>Today at 9:00 AM</TaskDate>
          </TaskDataWrapper>
        </TaskContainerWrapper>
        <OptionsButton onMouseEnter={() => setIsMenuOpen(true)}>
          <OptionsIcon />
        </OptionsButton>
        <OptionsContainer>
          <TaskMenuContent isActive={isMenuOpen}>
            <TaskMenuItem>
              <EditIcon />
            </TaskMenuItem>
            <TaskMenuItem onClick={() => dispatch(setActive())}>
              <DeleteIcon />
            </TaskMenuItem>
          </TaskMenuContent>
        </OptionsContainer>
      </TaskWrapper>
      <Modal heading={"Delete task"} content={<DeleteModal />} />
    </>
  );
};
