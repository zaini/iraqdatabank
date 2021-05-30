import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { Center, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import DataViewer from "./DataViewer/DataViewer";
import Footer from "./Footer";
import Logo from "./logo.png";
import { Image } from "@chakra-ui/react";
import Search from "./Search/Search";

const App = () => {
  return (
    <Container>
      <Heading fontSize="48px" m="10px" textAlign="center">
        Iraq Databank
      </Heading>
      <Center>
        <Image boxSize="200px" src={Logo} />
      </Center>
      <Heading fontSize="48px" textAlign="center">
        بنك معلومات العراق
      </Heading>

      <Divider />

      <Text textAlign="center" fontSize="18px">
        Iraq Databank is a clearinghouse and research tool for reports and
        statistics on Iraq
      </Text>

      <br />

      <Text textAlign="center" fontSize="18px">
        بنك معلومات العراق هو قاعدة بيانات واداة بحثية للتقارير والاحصائيات حول
        العراق
      </Text>

      <Divider />

      <Search />

      <Divider />

      <DataViewer />

      <Divider />

      <Footer />
    </Container>
  );
};

export default App;
