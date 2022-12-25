import React from "react";
import { Box, Progress } from "@chakra-ui/react";

const ProgressBar = () => {
  return (
    <>
      <Box width="70%">
        <Progress colorScheme="green" value={100} borderRadius="12px" />
      </Box>
    </>
  );
};

export default ProgressBar;
