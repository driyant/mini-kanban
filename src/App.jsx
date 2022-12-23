import { useState } from "react";
import { Heading, Box, Button, Grid, GridItem, Text, HStack } from "@chakra-ui/react";
import CardTodoGroup from "./components/CardTodoGroup";
import TaskItem from "./components/CardTaskItem";

function App() {
  return (
    <div className="App">
      <Box
        as="header"
        borderBottom="1px solid #E0E0E0"
        display="flex"
        alignItems="center"
        padding="10px 0"
        paddingLeft="18px"
      >
        <Heading as="h2" fontSize={18} marginRight="20px" lineHeight="28px">
          Product Roadmap
        </Heading>
        <Button
          backgroundColor="#01959F"
          color="white"
          fontSize="14px"
          borderRadius="8px"
          _hover={{ bg: "#229da5" }}
          padding="4px 16px"
          fontWeight="400"
        >
          + Add New Group
        </Button>
      </Box>
      <Grid
        height="auto"
        padding="24px"
        templateColumns="repeat(4, 1fr)"
        gap={8}
      >
        <CardTodoGroup />
      </Grid>
    </div>
  );
}

export default App;
