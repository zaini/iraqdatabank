import React from "react";
import { Box, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="4xl"
      py="12"
      px={{ base: 2, md: 4 }}
      color="gray.500"
    >
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Box>
          <a href="/">English الإنجليزية</a>
        </Box>
        <Box>
          <a href="mailto:info@iraqdatabank.org">Contact 📧 اتصل</a>
        </Box>
        <Box>
          <a href="/ar">Arabic العربية</a>
        </Box>
      </Stack>

      <br />

      <Box textAlign="center">
        <a
          href="https://zaini.me/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "gray", fontSize: "13px" }}
        >
          2021 &copy; Ali Zaini علي زيني
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
