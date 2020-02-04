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
      colorName = "blue";
      break;
    case "Closed":
      iconName = "coffee";
      colorName = "blue";
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
  let additionalInfo = (<Table.Cell textAlign='left'></Table.Cell>)
  if (props.name !== 'Собрание') {
      additionalInfo = (<Table.Cell textAlign='left'><Popup
      content={props.name}
      position="bottom right"
      size="mini"
      trigger={
        <Icon           style={{ marginRight: "0.5em" }}
        name="info" color="pink" size="small"  />
      }
    /></Table.Cell>
)
  } 


  return (
    <Table.Row negative={isToday}>
      <Table.Cell textAlign='left'>
        <Label
          style={{ marginLeft: "0.5em" }}

          size="tiny"
          horizontal
          basic
          color={
            props.weekday === "Su" || props.weekday === "Sa" ? "pink" : "black"
          }
        >
          {ruWeekdays.get(props.weekday)}
        </Label>
      </Table.Cell>
     {additionalInfo}

      <Table.Cell textAlign='center'>{timeSubstr}</Table.Cell>
      <Table.Cell textAlign='right'>
        <Popup
          content={ruMeetingType.get(props.type)}
          position="bottom right"
          size="mini"
          trigger={
            <Icon           style={{ marginRight: "0.5em" }}
            name={iconName} color={colorName} size="small"  />
          }
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default Meeting;
