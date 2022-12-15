import React from "react";
import { Task } from "../task/Task";
import { TasksWrapper } from "./Tasks.styled";

export const Tasks = () => {
  return (
    <TasksWrapper>
      <Task />
      <Task />
    </TasksWrapper>
  );
};
