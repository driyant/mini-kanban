import React from 'react'
import { Heading, Box, Button, Grid } from "@chakra-ui/react";
import CardTodoGroup1 from "../components/CardTodoGroup/CardTodoGroup1";
import CardTodoGroup2 from "../components/CardTodoGroup/CardTodoGroup2";
import CardTodoGroup3 from "../components/CardTodoGroup/CardTodoGroup3";
import CardTodoGroup4 from "../components/CardTodoGroup/CardTodoGroup4";

const Homepage = () => {
  return (
    <>
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
        <CardTodoGroup1></CardTodoGroup1>
        <CardTodoGroup2></CardTodoGroup2>
        <CardTodoGroup3></CardTodoGroup3>
        <CardTodoGroup4></CardTodoGroup4>
      </Grid>
    </>
  )
}

export default Homepage