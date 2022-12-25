import React, { useState } from "react";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import SettingButton from "./SettingButton";
import DialogModal from "./DialogModal";
import { deleteTaskItem, getSingeItem, updateSingleItem } from "../store/action";
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
  const [typeModal, setTypeModal] = useState("");
  const [taskName, setTaskName] = useState("");
  const [progressPercentage, setProgressPercentage] = useState(0);
  const getModalClose = () => {
    setModalIsOpen(false);
  };
  const deleteHandler = () => {
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
  const getSingleTask = (itemId, todoId) => {
    dispatch(getSingeItem(itemId, todoId)).then((item) => {
      setTaskName(item.name);
      setProgressPercentage(item.progress_percentage);
    });
  };
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateSingleItem(itemId, todoId, taskName))
    .then(resp => {
      if(resp.ok) setModalIsOpen(false)
      dispatch(fetchTaskItemGroup1());
      dispatch(fetchTaskItemGroup2());
      dispatch(fetchTaskItemGroup3());
      dispatch(fetchTaskItemGroup4());
    })
    .catch(err => console.log(err));
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
          <MenuItem
            onClick={() => {
              setTypeModal("edit");
              setModalIsOpen(!modalIsOpen);
              getSingleTask(itemId, todoId);
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTypeModal("delete");
              setModalIsOpen(!modalIsOpen);
            }}
          >
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
      {typeModal === "edit" && (
        <DialogModal
          title="Edit Task"
          modalIsOpen={modalIsOpen}
          modalIsClose={getModalClose}
          updateHandler={updateHandler}
        >
          <form onSubmit={updateHandler}>
            <FormControl mb="1rem">
              <FormLabel>Task Name</FormLabel>
              <Input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </FormControl>
            <FormControl mb="1rem">
              <FormLabel>Progress</FormLabel>
              <Input
                type="text"
                width="100px"
                placeholder="70%"
                disabled={true}
                onChange={(e) => setProgressPercentage(e.target.value)}
                value={progressPercentage}
              />
            </FormControl>
          </form>
        </DialogModal>
      )}
      {typeModal === "delete" && (
        <DialogModal
          title="Delete Task"
          modalIsOpen={modalIsOpen}
          modalIsClose={getModalClose}
          deleteHandler={deleteHandler}
        >
          <Text>
            Are you sure want to delete this task? your action can't be
            reverted.
          </Text>
        </DialogModal>
      )}
    </>
  );
};

export default DialogMenu;
