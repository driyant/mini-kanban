import React from "react";
import { GridItem } from "@chakra-ui/react";

const TodoGroup = ({ children }) => {
  return (
    <>
      <GridItem
        width="326px"
        border="1px solid #01959F"
        padding="16px"
        borderRadius="4px"
        display="flex"
        flexFlow="column"
        gap={2}
      >
        {children}
      </GridItem>
    </>
  );
};

export default TodoGroup;
