import React, { useState } from "react";
import {
  Menu,
  MenuList,
  MenuItem,
  Portal,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import SettingButton from "./SettingButton";
import DialogModal from "./DialogModal";
import { deleteTaskItem } from "../store/action";
import { useDispatch } from "react-redux";
import {
  fetchTaskItemGroup1,
  fetchTaskItemGroup2,
  fetchTaskItemGroup3,
  fetchTaskItemGroup4,
} from "../store/action";

const DialogMenu = ({ itemId, todoId }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getModalClose = () => {
    setModalIsOpen(false);
  };
  const deleteHandler = () => {
    // console.log("delete", itemId, todoId);
    dispatch(deleteTaskItem(itemId, todoId))
      .then((resp) => {
        if (resp.ok) setModalIsOpen(false);
      })
      .then(() => {
        dispatch(fetchTaskItemGroup1());
        dispatch(fetchTaskItemGroup2());
        dispatch(fetchTaskItemGroup3());
        dispatch(fetchTaskItemGroup4());
      });
  };
  return (
    <>
      <Menu>
        <MenuButton height="2rem" cursor="pointer">
          <SettingButton />
        </MenuButton>
        <MenuList marginLeft="1rem">
          <MenuItem>Move Right</MenuItem>
          <MenuItem>Move Left</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem onClick={() => setModalIsOpen(!modalIsOpen)}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
      <DialogModal
        title="Delete Task"
        modalIsOpen={modalIsOpen}
        modalIsClose={getModalClose}
        deleteHandler={deleteHandler}
      >
        <Text>
          Are you sure want to delete this task? your action can't be reverted.
        </Text>
      </DialogModal>
    </>
  );
};

export default DialogMenu;
