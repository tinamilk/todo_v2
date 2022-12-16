import { useState } from "react";
import * as React from "react";
import { MenuItem } from "../../ui/menu-item/MenuItem";
import { FilterButtonsWrapper, IconButton, MenuWrapper } from "./filter.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Filter } from "../../../types/types";
import { AddTaskIcon, Checked, Date, TodayIcon } from "../../../assets/Icons";

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

  return (
    <MenuWrapper>
      <FilterButtonsWrapper>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            title={menuItem.name}
            icon={menuItem.path}
            isActive={menuItem.name === currentFilter}
          />
        ))}
      </FilterButtonsWrapper>
      <IconButton>
        <AddTaskIcon />
        Add Task
      </IconButton>
    </MenuWrapper>
  );
};
