import React from "react";
import data from "./data";
import { Accordion } from "semantic-ui-react";

const getPanels = () => {
  let rootPanels = [];

  for (const topic in data) {
    if (Object.hasOwnProperty.call(data, topic)) {
      const element = data[topic];
      const title = element["topic"];
      const files = element["files"];
      rootPanels.push({
        key: title,
        title: title,
        content: { content: <>test</> },
      });
    }
  }

  return rootPanels;
};

const DataViewer = () => {
  const rootPanels = getPanels(data);

  return (
    <>
      <Accordion panels={rootPanels} styled />
    </>
  );
};

export default DataViewer;
