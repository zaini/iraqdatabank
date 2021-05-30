import React from "react";
import { Button, Card } from "semantic-ui-react";

const SearchResult = ({ result }) => {
  const path = window.location.pathname;

  return (
    <Card style={{ width: "100%" }}>
      <Card.Content>
        <Card.Header>{result.title}</Card.Header>
        {result.description && (
          <Card.Description>{result.description}</Card.Description>
        )}
      </Card.Content>
      <Card.Content extra>
        <Button
          as={"a"}
          href={result.en_source}
          disabled={!result.en_source}
          target="_blank"
        >
          {path === "/ar" ? "الإنجليزية" : "English"}
        </Button>

        <Button
          as={"a"}
          href={result.ar_source}
          disabled={!result.ar_source}
          target="_blank"
        >
          {path === "/ar" ? "عربى" : "Arabic"}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default SearchResult;
