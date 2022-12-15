import React from "react";

import {
  TaskDataWrapper,
  TaskWrapper,
  TaskImage,
  TaskName,
  TaskDate,
} from "./Task.styled";
import taskImageSrc from "../../../assets/img/default_task.svg";

export const Task = () => {
  return (
    <TaskWrapper>
      <TaskImage srcSet={taskImageSrc} />
      <TaskDataWrapper>
        <TaskName>Task1</TaskName>
        <TaskDate>Today at 9:00 AM</TaskDate>
      </TaskDataWrapper>
    </TaskWrapper>
  );
};
