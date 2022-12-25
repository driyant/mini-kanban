import React, { useState } from "react";
import { Box, Text, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DialogModal from "./DialogModal";
import { useDispatch } from "react-redux";
import { createTask, fetchTaskItemGroup1 } from "../store/action";

const ButtonNewTask = ({ todoId }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [progress, setProgress] = useState("");
  const getModalOpen = () => {
    setModalIsOpen(true);
  };
  const getModalClose = () => {
    setModalIsOpen(false);
  };
  const createTaskHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: taskName,
      progress_percentage: +progress,
    };
    dispatch(createTask(todoId, obj)).then((resp) => {
      if (resp.ok) setModalIsOpen(false);
      setTaskName("");
      setProgress("");
    });
    dispatch(fetchTaskItemGroup1());
  };
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        marginTop="0.5rem"
        cursor="pointer"
        width="110px"
        onClick={getModalOpen}
      >
        <Box
          border="1px solid gray"
          height="20px"
          width="20px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="0.5rem"
        >
          <AddIcon boxSize={2.5} />
        </Box>
        <Text>New Task</Text>
      </Box>
      <DialogModal
        title="Create Task"
        modalIsOpen={modalIsOpen}
        modalIsClose={getModalClose}
        createTaskHandler={createTaskHandler}
      >
        <form onSubmit={createTaskHandler}>
          <FormControl mb="1rem">
            <FormLabel>Task Name</FormLabel>
            <Input
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
          </FormControl>
          <FormControl mb="1rem">
            <FormLabel>Progress</FormLabel>
            <Input
              type="text"
              width="100px"
              placeholder="70%"
              onChange={(e) => setProgress(e.target.value)}
              value={progress}
            />
          </FormControl>
        </form>
      </DialogModal>
    </>
  );
};

export default React.memo(ButtonNewTask);
