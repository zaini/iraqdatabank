import React from "react";
import { Search } from "semantic-ui-react";
import en_data from "../en_data";
import ar_data from "../ar_data";

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
  const searchData = flattenData(data);

  console.log(searchData.flat(5));

  return (
    <>
      <Search />
    </>
  );
};

export default DataViewer;
