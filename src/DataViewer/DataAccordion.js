import React from "react";
import { Button, Divider } from "semantic-ui-react";

const DataAccordion = ({ title, description, en_source, ar_source }) => {
  const path = window.location.pathname;

  return (
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
  );
};

export default DataAccordion;
