import { MenuItem } from "../../ui/menu-item/MenuItem";
import {
  AddTaskIcon,
  Checked,
  Date,
  Logout,
  TodayIcon,
} from "../../../assets/Icons";
import { IconButton } from "../../ui/button/button.styled";
import { MenuButtonsWrapper, MenuWrapper } from "../../ui/menu/Menu.styled";

type Props = {
  currentType: string;
  changeType: (type: string) => void;
};
type Items = {
  name: "Profile" | "Security";
  path: any;
}[];

const menuItems: Items = [
  { name: "Profile", path: <TodayIcon /> },
  { name: "Security", path: <Checked /> },
];

export const SettingsMenu = ({ changeType, currentType }: Props) => {
  return (
    <MenuWrapper gap="180px">
      <MenuButtonsWrapper>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            title={menuItem.name}
            icon={menuItem.path}
            isActive={currentType === menuItem.name.toLowerCase()}
            changeType={changeType}
          />
        ))}
      </MenuButtonsWrapper>
      <IconButton buttonType="default">
        <Logout />
        Log Out
      </IconButton>
    </MenuWrapper>
  );
};
