import React from "react";
import { GridItem, Heading, Box, Text } from "@chakra-ui/react";
import CardTaskItem from "./CardTaskItem";

const CardTodoGroup = ({ groupTasks }) => {
  return (
    <>
      {groupTasks.map((groupTask) => {
        console.log(groupTask);
        return (
          <GridItem
            width="326px"
            border="1px solid #01959F"
            padding="16px"
            borderRadius="4px"
            display="flex"
            flexFlow="column"
            gap={2}
            key={groupTask.id}
          >
            <Box
              border="1px solid #01959F"
              width="125px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="8px"
              borderRadius="4px"
            >
              <Heading as="h4" color="#01959F" fontSize="14px" fontWeight="400">
                {groupTask.title}
              </Heading>
            </Box>
            <Text fontWeight="700">{groupTask.description}</Text>
            <CardTaskItem />
          </GridItem>
        );
      })}
    </>
  );
};

export default CardTodoGroup;
