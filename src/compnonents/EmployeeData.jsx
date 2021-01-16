import React from "react";
import { MDBDataTable } from "mdbreact";

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 300,
      },
      {
        label: "DOB",
        field: "dob",
        sort: "asc",
        width: 250,
      }
    ],
    rows:props.employees
  };
  return <MDBDataTable sorting={true} striped bordered data={data} entriesOptions={[25, 50, 100]} entries={25} pagesAmount={4}fullPagination/>;
};

export default EmployeeData;