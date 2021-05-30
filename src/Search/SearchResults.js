import { Box } from "@chakra-ui/layout";
import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = ({ data }) => {
  return (
    <Box w="100%">
      {data.map((e, i) => {
        return (
          <Box mb="12px">
            <SearchResult result={e} />
          </Box>
        );
      })}
    </Box>
  );
};

export default SearchResults;
