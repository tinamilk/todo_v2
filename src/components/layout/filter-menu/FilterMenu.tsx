import { useState } from "react";
import { MenuItem } from "../../ui/menu-item/MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Filter } from "../../../types/types";
import { AddTaskIcon, Checked, Date, TodayIcon } from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { useDispatch } from "react-redux";
import { setActive } from "../../../redux/modal/modal";
import { MenuWrapper, MenuButtonsWrapper } from "../../ui/menu/Menu.styled";

interface ItemProps {
  isActive: string;
}

type Items = {
  name: Filter;
  path: any;
}[];

const menuItems: Items = [
  { name: "Today", path: <TodayIcon /> },
  { name: "Done", path: <Checked /> },
  { name: "Date", path: <Date /> },
];

export const FilterMenu = () => {
  const currentFilter = useSelector((state: RootState) => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <MenuWrapper gap="141px">
      <MenuButtonsWrapper>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            title={menuItem.name}
            icon={menuItem.path}
            isActive={menuItem.name === currentFilter}
          />
        ))}
      </MenuButtonsWrapper>
      <IconButton
        buttonType="default"
        onClick={() => dispatch(setActive("add"))}
      >
        <AddTaskIcon />
        Add Task
      </IconButton>
    </MenuWrapper>
  );
};
