import React, { useEffect, useState } from "react";
import { GridItem, Heading, Box, Text } from "@chakra-ui/react";
import CardTaskItem from "../CardTaskList/CardTaskItemGroup1";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTaskItemGroup1,
} from "../../store/action";

const CardTodoGroup1 = ({ groupTasks }) => {
  const { items1 } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskItemGroup1())
  }, []);
  return (
    <>
      <GridItem
        width="326px"
        border={`1px solid #4DB5BC`}
        padding="16px"
        borderRadius="4px"
        display="flex"
        flexFlow="column"
        gap={2}
        height="fit-content"
      >
        <Box
          border={`1px solid #4DB5BC`}
          width="125px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="8px"
          borderRadius="4px"
        >
          <Heading
            as="h4"
            color={`#4DB5BC`}
            fontSize="14px"
            fontWeight="400"
          >
            Group Task 1
          </Heading>
        </Box>
        <Text fontWeight="700">Januari - Feb</Text>
        <CardTaskItem items={items1} todoId={1}/>
      </GridItem>
    </>
  );
};

export default CardTodoGroup1;
