import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/filters/filters";
import { Filter } from "../../../types/types";
import { MenuItemWrapper } from "./menu-item.styled";

type PropsType = {
  title: Filter;
  isActive: boolean;
  icon: any;
  changeType?: (type: string) => void;
};

export const MenuItem = ({ title, isActive, icon, changeType }: PropsType) => {
  const dispatch = useDispatch();
  const iconColor = isActive ? "#9333EA" : "#6B7280";

  const handleChangeActive = () => {
    if (title == "Profile" || title === "Security") {
      changeType && changeType(title.toLowerCase());
      return;
    }

    dispatch(setFilter(title));
  };
  return (
    <MenuItemWrapper isActive={isActive} onClick={handleChangeActive}>
      {React.cloneElement(icon, { fill: iconColor })}
      {title}
    </MenuItemWrapper>
  );
};
