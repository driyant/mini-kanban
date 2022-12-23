import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ButtonNewTask = () => {
  return (
    <>
      <Box display="flex" alignItems="center" marginTop="0.5rem" cursor="pointer" width="110px">
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
    </>
  );
};

export default ButtonNewTask;
