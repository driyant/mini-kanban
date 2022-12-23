import React from "react";
import { Box, Text, Progress } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SettingButton from "./SettingButton";
import ButtonNewTask from "./ButtonNewTask";
import DialogMenu from "./DialogMenu";

const CardTaskItem = () => {
  const value = 100;
  return (
    <>
      <Box border="1px solid #E0E0E0" padding="1rem" margin="2px 0">
        <Text fontWeight="700">
          Re-designed the zero-g doggie bags. No more spills!
        </Text>
        <Box border="1px dashed #E0E0E0" margin="1rem 0"></Box>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          gap="15px"
        >
          <Box width="70%">
            <Progress
              colorScheme={value === 100 ? "green" : "blue"}
              value={value}
              borderRadius="12px"
            />
          </Box>
          <Box>
            {value === 100 ? (
              <CheckCircleIcon boxSize={4} color="green" />
            ) : (
              <Text fontSize="14px" color="#757575">{value}%</Text>
            )}
          </Box>
          <DialogMenu />
        </Box>
        <ButtonNewTask />
      </Box>
    </>
  );
};

export default CardTaskItem;
