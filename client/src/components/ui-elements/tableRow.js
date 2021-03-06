import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const TableRow = props => {
  const color = props.color ? props.color : "black"
  const align = props.align ? props.align : "left"
  return (
  <Table.Row>
    <Table.Cell textAlign={align}>
      <Icon
        name={props.icon}
        color={color}
        size="small"
        style={{ marginRight: "1em" }}
      />
      {props.content}
    </Table.Cell>
    <Table.Cell>
      {props.extraContent}
    </Table.Cell>
    <Table.Cell>
      {props.extraExtraContent}
    </Table.Cell>
  </Table.Row>
  )}

export default TableRow
