import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { Center } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import DataViewer from "./DataViewer";
import Footer from "./Footer";
import Logo from "./logo.png";
import { Image } from "@chakra-ui/react";

const App = () => {
  return (
    <Container>
      <Center m="10px">
        <Heading fontSize="50px">Iraq Databank</Heading>
      </Center>
      <Center>
        <Image boxSize="200px" src={Logo} />
      </Center>
      <Center>
        <Heading fontSize="50px">بنك المعلومات للعراق</Heading>
      </Center>
      <Divider />
      <DataViewer />
      <Divider />
      <Footer />
    </Container>
  );
};

export default App;
