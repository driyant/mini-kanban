import React, { useState } from "react";
import { Box, Text, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DialogModal from "./DialogModal";

const ButtonNewTask = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getModalOpen = () => {
    setModalIsOpen(true);
  }
  const getModalClose = () => {
    setModalIsOpen(false);
  }
  const createTaskHandler = (e) => {
    e.preventDefault();
    console.log('ok')
  }
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
      <DialogModal title="Create Task" modalIsOpen={modalIsOpen} modalIsClose={getModalClose} createTaskHandler={createTaskHandler}>
        <form onSubmit={createTaskHandler}>
          <FormControl mb="1rem">
            <FormLabel>Task Name</FormLabel>
            <Input type="text"/>
          </FormControl>
          <FormControl mb="1rem">
            <FormLabel>Progress</FormLabel>
            <Input type="text" width="100px" placeholder="70%"/>
          </FormControl>
        </form>
      </DialogModal>
    </>
  );
};

export default ButtonNewTask;
