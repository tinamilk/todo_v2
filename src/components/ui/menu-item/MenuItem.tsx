import React from "react";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/filters/filters";
import { Filter } from "../../../types/types";
import { MenuItemWrapper } from "./menu-item.styled";

type PropsType = {
  title: Filter;
  isActive: boolean;
  icon: any;
};

export const MenuItem = ({ title, isActive, icon }: PropsType) => {
  const dispatch = useDispatch();
  const iconColor = isActive ? "#9333EA" : "#6B7280";
  return (
    <MenuItemWrapper
      isActive={isActive}
      onClick={() => dispatch(setFilter(title))}
    >
      {React.cloneElement(icon, { fill: iconColor })}
      {title}
    </MenuItemWrapper>
  );
};
