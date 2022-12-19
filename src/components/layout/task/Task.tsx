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

export const Task = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleChangeIsDone = () => {
    setIsDone(!isDone);
  };
  return (
    <TaskWrapper>
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
      <OptionsButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <OptionsIcon />
      </OptionsButton>

      <OptionsContainer>
        <TaskMenuContent isActive={isMenuOpen}>
          <TaskMenuItem>
            <EditIcon />
          </TaskMenuItem>
          <TaskMenuItem>
            <DeleteIcon />
          </TaskMenuItem>
        </TaskMenuContent>
      </OptionsContainer>
    </TaskWrapper>
  );
};
