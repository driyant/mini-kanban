import React, { useEffect, useState } from "react";
import { GridItem, Heading, Box, Text } from "@chakra-ui/react";
import CardTaskItem from "../CardTaskList/CardTaskItemGroup1";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskItemGroup4 } from "../../store/action";

const CardTodoGroup4 = ({ groupTasks }) => {
  const { items4 } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskItemGroup4());
  }, []);
  return (
    <>
      <GridItem
        width="326px"
        border={`1px solid #50d896`}
        padding="16px"
        borderRadius="4px"
        display="flex"
        flexFlow="column"
        gap={2}
        height="fit-content"
      >
        <Box
          border={`1px solid #50d896`}
          width="125px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="8px"
          borderRadius="4px"
        >
          <Heading as="h4" color={`#50d896`} fontSize="14px" fontWeight="400">
            Group Task 4
          </Heading>
        </Box>
        <Text fontWeight="700">May - June</Text>
        <CardTaskItem items={items4}/>
      </GridItem>
    </>
  );
};

export default CardTodoGroup4;
