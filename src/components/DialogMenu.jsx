import React from "react";
import { Menu, MenuList, MenuItem, Portal, MenuButton } from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import SettingButton from "./SettingButton";

const DialogMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton height="2rem" cursor="pointer">
          <SettingButton/>
        </MenuButton>
        <MenuList marginLeft="1rem">
          <MenuItem>Move Right</MenuItem>
          <MenuItem>Move Left</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default DialogMenu;
