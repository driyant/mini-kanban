import React, { useEffect, useState } from "react";
import { GridItem, Heading, Box, Text } from "@chakra-ui/react";
import CardTaskItem from "../CardTaskList/CardTaskItemGroup1";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTaskItemGroup1,
  fetchTaskItemGroup2,
  fetchTaskItemGroup3,
  fetchTaskItemGroup4,
} from "../../store/action";

const CardTodoGroup2 = ({ groupTasks }) => {
  const { items2 } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskItemGroup2());
  }, []);
  return (
    <>
      <GridItem
        width="326px"
        border={`1px solid #f7c654`}
        padding="16px"
        borderRadius="4px"
        display="flex"
        flexFlow="column"
        gap={2}
        height="fit-content"
      >
        <Box
          border={`1px solid #f7c654`}
          width="125px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="8px"
          borderRadius="4px"
        >
          <Heading as="h4" color={`#f7c654`} fontSize="14px" fontWeight="400">
            Group Task 2
          </Heading>
        </Box>
        <Text fontWeight="700">March - April</Text>
        <CardTaskItem items={items2} todoId={2} />
      </GridItem>
    </>
  );
};

export default CardTodoGroup2;
