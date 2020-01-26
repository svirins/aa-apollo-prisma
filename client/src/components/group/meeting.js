import React from "react";
import { format, parseISO } from "date-fns";
import { getToday } from "../../utils/utils";
import { Table, Icon, Popup, Label } from "semantic-ui-react";
import {ruWeekdays, ruMeetingType} from '../../const/globalConst'

const Meeting = props => {
  const isToday = props.weekday === getToday() ? true : false;
  let timeSubstr = format(parseISO(props.time), "HH':'mm");
  let iconName = "";
  let colorName = "";
  switch (props.type) {
    case "Open":
      iconName = "bullhorn";
      colorName = "green";
      break;
    case "Closed":
      iconName = "comment";
      colorName = "grey";
      break;
    case "Speaker":
      iconName = "lightning";
      colorName = "orange";
      break;
    case "Twelve":
      iconName = "pointing up";
      colorName = "teal";
      break;
    case "Reflections":
      iconName = "file outline";
      colorName = "blue";
      break;
    default:
      iconName = "talk";
      colorName = "black";
  }

  return (
    <Table.Row negative={isToday}>
      <Table.Cell textAlign='left'>
        <Label
          size="mini"
          color={
            props.weekday === "Su" || props.weekday === "Sa" ? "orange" : "grey"
          }
        >
          {ruWeekdays.get(props.weekday)}
        </Label>
      </Table.Cell>
      <Table.Cell textAlign='right'>{timeSubstr}</Table.Cell>
      <Table.Cell textAlign='right'>
        <Popup
          content={ruMeetingType.get(props.type)}
          position="bottom right"
          size="mini"
          trigger={
            <Icon name={iconName} color={colorName} size="small"  />
          }
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default Meeting;
