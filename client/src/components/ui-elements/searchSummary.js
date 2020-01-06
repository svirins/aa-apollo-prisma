import React from "react";

import { Message } from "semantic-ui-react";

export default function SearchSummary(props) {
  const header = `Found ${props.count} groups`;
  const filter =
    props.searchParams.filter !== ""
      ? `Filter is ${props.searchParams.filter}`
      : null;
  const select =
    props.searchParams.regionSelect !== ""
      ? `Filter is ${props.searchParams.regionSelect}`
      : null;
  return (
    <Message positive>
      <Message.Header>{header}</Message.Header>
      <p>{filter}</p>
      <p>{select}</p>
    </Message>
  );
}
