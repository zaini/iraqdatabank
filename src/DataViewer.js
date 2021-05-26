import React from "react";
import { Accordion, Button, Divider } from "semantic-ui-react";
import en_data from "./en_data";
import ar_data from "./ar_data";

const getPanels = (node) => {
  if (Array.isArray(node)) {
    // If node is a list
    let panels = [];

    for (let i = 0; i < node.length; i++) {
      const element = node[i];
      const panel = getPanels(element);
      panels.push(panel);
    }
    return panels;
  } else if (node["topic"] && node["files"]) {
    // If node is "folder"
    const title = node["topic"];
    const files = node["files"];
    let x = [];

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const panel = getPanels(file);
      x.push(panel);
    }

    return {
      key: title,
      title: title,
      content: {
        content: (
          <div>
            <Accordion.Accordion panels={x} />
          </div>
        ),
      },
    };
  } else if (node["title"]) {
    // If node is a normal file
    const title = node["title"] || "";
    const en_source = node["en_source"] || "";
    const ar_source = node["ar_source"] || "";
    const description = node["description"] || "";

    const path = window.location.pathname;

    return {
      key: title,
      title: title,
      content: {
        content: (
          <div>
            {description && [description, <Divider />]}
            <Button
              as={"a"}
              href={en_source}
              disabled={en_source === ""}
              target="_blank"
            >
              {path === "/ar" ? "الإنجليزية" : "English"}
            </Button>
            <Button
              as={"a"}
              href={ar_source}
              disabled={ar_source === ""}
              target="_blank"
            >
              {path === "/ar" ? "عربى" : "Arabic"}
            </Button>
          </div>
        ),
      },
    };
  }
};

const DataViewer = () => {
  const path = window.location.pathname;
  let data = path === "/ar" ? ar_data : en_data;
  const rootPanels = getPanels(data);

  return (
    <>
      <Accordion
        dir={path === "/ar" ? "rtl" : "ltr"}
        panels={rootPanels}
        fluid
        styled
      />
    </>
  );
};

export default DataViewer;
