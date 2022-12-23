import { useState } from "react";
import { Heading, Box, Button, Grid, GridItem, Text, HStack } from "@chakra-ui/react";
import TodoGroup from "./components/TodoGroup";

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
        border="1px"
        padding="24px"
        templateColumns="repeat(4, 1fr)"
        gap={8}
      >
        <TodoGroup>
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
              Group Task 1
            </Heading>
          </Box>
          <Text fontWeight="700">January - March</Text>
        </TodoGroup>
      </Grid>
    </div>
  );
}

export default App;
