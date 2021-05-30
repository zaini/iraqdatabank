import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import en_data from "../en_data";
import ar_data from "../ar_data";
import SearchResults from "./SearchResults";
import { Box, Center } from "@chakra-ui/layout";

const flattenData = (node) => {
  if (Array.isArray(node)) {
    // If node is a list
    let res = [];

    for (let i = 0; i < node.length; i++) {
      const element = node[i];
      const data = flattenData(element);
      res.push(data);
    }

    return res;
  } else if (node["topic"] && node["files"]) {
    // If node is "folder"
    const files = node["files"];
    let res = [];

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const x = flattenData(file);
      res.push(x);
    }

    return res;
  } else if (node["title"]) {
    // If node is a normal file
    return [node];
  }
};

const DataViewer = () => {
  const path = window.location.pathname;
  let data = path === "/ar" ? ar_data : en_data;
  const searchData = flattenData(data).flat(5);

  const [results, setResults] = useState([]);

  return (
    <Box>
      <Center>
        <Input
          icon="search"
          placeholder="Search..."
          style={{ width: "25rem" }}
          onChange={(e) => {
            const query = e.target.value;
            console.log(query);
            if (query === "") {
              setResults([]);
              console.log("no query");
            } else {
              console.log("proper query", query);
              setResults(
                searchData.filter(
                  (file) =>
                    (file.title && file.title.toLowerCase().includes(query)) ||
                    (file.description &&
                      file.description.toLowerCase().includes(query))
                )
              );
            }
          }}
        />
      </Center>
      <br />
      <Center>
        <SearchResults data={results} />
      </Center>
    </Box>
  );
};

export default DataViewer;
