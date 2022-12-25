import React, { useEffect, useState } from "react";
import { GridItem, Heading, Box, Text } from "@chakra-ui/react";
import CardTaskItem from "../CardTaskList/CardTaskItemGroup1";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskItemGroup3 } from "../../store/action";

const CardTodoGroup3 = ({ groupTasks }) => {
  const { items3 } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskItemGroup3());
  }, []);
  return (
    <>
      <GridItem
        width="326px"
        border={`1px solid #F5B1B7`}
        padding="16px"
        borderRadius="4px"
        display="flex"
        flexFlow="column"
        gap={2}
        height="fit-content"
      >
        <Box
          border={`1px solid #F5B1B7`}
          width="125px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="8px"
          borderRadius="4px"
        >
          <Heading as="h4" color={`#F5B1B7`} fontSize="14px" fontWeight="400">
            Group Task 3
          </Heading>
        </Box>
        <Text fontWeight="700">May - June</Text>
        <CardTaskItem items={items3}/>
      </GridItem>
    </>
  );
};

export default CardTodoGroup3;
