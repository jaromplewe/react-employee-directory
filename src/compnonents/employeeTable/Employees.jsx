import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeData from "../EmployeeData";

function Employee() {

  const [employeeRecs, setEmployeeRecs] = useState();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=500&nat=us")
      .then((records) => {
        let employeeData = records.data.results;
        let employeeRecords = [];
        for (let i = 0; i < employeeData.length; i++) {
          let erecord = {
            name: employeeData[i].name.first + " " + employeeData[i].name.last,
            email: employeeData[i].email,
            image: employeeData[i].picture.medium,
            phone: employeeData[i].cell,
            dob: employeeData[i].dob.date,
          };
          employeeRecords.push(erecord);
        }
        setEmployeeRecs(employeeRecords);
      });
  })

  return (
    <div>
      <h2>Employee Details</h2>
      <EmployeeData employees={employeeRecs} />>
    </div>
  );
}

export default Employee;