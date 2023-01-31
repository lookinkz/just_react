import React from "react";
import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { useEffect } from "react";

const columns = [
  {
    key: "edit",
    name: "Edit",
    fieldName: "edit",
    minWidth: 30,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Program",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "email",
    name: "Email",
    fieldName: "email",
    minWidth: 130,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "delete",
    name: "Delete",
    fieldName: "delete",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
];

let items = [];

const EnrolList = (props) => {
  useEffect(() => {
    const curItemKey = props.studentDetails.key;
    if (curItemKey) {
      items = [...items, props.studentDetails];
      props.setStudentDetails({});
    }
    // execute deletion
    if (props.action === "delete") {
      // filter
      const deleteItem = items.filter(
        (item) => item.key === props.selectedItemId
      )[0];
      // remove
      items = items.filter((item) => item !== deleteItem);
      // update seats
      props.restoreSeats(deleteItem.program);
    }
  }, [props]);

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};

export default EnrolList;
