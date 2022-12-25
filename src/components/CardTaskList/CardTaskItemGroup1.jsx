import React, { useEffect } from "react";
import { Box, Text, Progress } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ButtonNewTask from "../ButtonNewTask";
import DialogMenu from "../DialogMenu";

const CardTaskItem = ({ items, todoId }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <Box border="1px solid #E0E0E0" padding="1rem" margin="2px 0" key={item.id}>
            <Text fontWeight="700">
              {item.name}
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
                  colorScheme={item.progress_percentage === 100 ? "green" : "blue"}
                  value={item.progress_percentage}
                  borderRadius="12px"
                />
              </Box>
              <Box>
                {item.progress_percentage === 100 ? (
                  <CheckCircleIcon boxSize={4} color="green" />
                ) : (
                  <Text fontSize="14px" color="#757575">
                    {item.progress_percentage}%
                  </Text>
                )}
              </Box>
              <DialogMenu todoId={item.todo_id}/>
            </Box>
          </Box>
        );
      })}
      <ButtonNewTask todoId={todoId}/>
    </>
  );
};

export default React.memo(CardTaskItem);
