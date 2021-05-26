import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { Center } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import DataViewer from "./DataViewer";
import Footer from "./Footer";

const App = () => {
  return (
    <Container>
      <Center m="10px" mb="20px">
        <Heading fontSize="50px">Iraq Data Bank</Heading>
      </Center>
      <Divider />
      <DataViewer />
      <Divider />
      <Footer />
    </Container>
  );
};

export default App;
