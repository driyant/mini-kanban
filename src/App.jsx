import { useState } from "react";
import { Heading, Box, Button } from "@chakra-ui/react";

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
        >
          + Add New Group
        </Button>
      </Box>
    </div>
  );
}

export default App;
