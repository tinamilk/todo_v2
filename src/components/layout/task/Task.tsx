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
} from "./Task.styled";
import {
  OptionsIcon,
  DefaultTaskImg,
  EditIcon,
  DeleteIcon,
} from "../../../assets/Icons";

export const Task = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <TaskWrapper>
      <TaskContainerWrapper>
        <DefaultTaskImg />
        <TaskDataWrapper>
          <TaskName>Task1</TaskName>
          <TaskDate>Today at 9:00 AM</TaskDate>
        </TaskDataWrapper>
      </TaskContainerWrapper>
      <OptionsButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <OptionsIcon />
      </OptionsButton>
      <TaskMenuContent isActive={isMenuOpen}>
        <TaskMenuItem>
          <EditIcon />
        </TaskMenuItem>
        <TaskMenuItem>
          <DeleteIcon />
        </TaskMenuItem>
      </TaskMenuContent>
    </TaskWrapper>
  );
};
