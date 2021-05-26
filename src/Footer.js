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
        {/* <Box>
          <a href="https://zaini.me/" target="_blank">
            علي زيني Ali Zaini &copy;
          </a>
        </Box> */}
        <Box>
          <a href="/">English الإنجليزية</a>
        </Box>
        <Box>
          <a href="mailto:alialmawlawi@gmail.com">Contact 📧 اتصل</a>
        </Box>
        <Box>
          <a href="/ar">Arabic عربى</a>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
