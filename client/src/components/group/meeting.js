import React from "react";
import { format, parseISO } from "date-fns";
import { getToday } from "../../utils/utils";

import { Table, Header, Icon, Popup } from "semantic-ui-react";

const Meeting = props => {
  const isToday = props.weekday === getToday() ? true : false;
  let timeSubstr = format(parseISO(props.time), "HH':'mm");
  let iconName = "";
  let colorName = "";
  switch (props.type) {
    case "Open":
      iconName = "lock open";
      colorName = "green";
      break;
    case "Closed":
      iconName = "lock";
      colorName = "grey";
      break;
    case "Speaker":
      iconName = "microphone";
      colorName = "orange";
      break;
    case "Twelve":
      iconName = "sort amount up";
      colorName = "teal";
      break;
    case "Reflections":
      iconName = "file outline";
      colorName = "blue";
      break;
    default:
      iconName = "file outline";
      colorName = "black";
  }

  return (
    <Table.Row negative={isToday}>
      <Table.Cell color={props.weekday === "Su" ? "orange" : "blue"}>
        {props.weekday}
      </Table.Cell>
      <Table.Cell>{timeSubstr}</Table.Cell>
      <Table.Cell>
        <Popup
          content={props.type}
          position="bottom right"
          size="mini"
          trigger={
            <Icon name={iconName} color={colorName} size="small" circular />
          }
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default Meeting;

// consider !
// <Label ribbon>First</Label>
