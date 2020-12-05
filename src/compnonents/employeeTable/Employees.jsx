import React, { useState } from 'react';

import { kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import "./style.css";

const dataArray = Array(10).fill(undefined).map(
  (index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }),
);

const tablePropsInit = {
  columns: [
    { key: 'column1', title: 'Name', dataType: DataType.String },
    { key: 'column2', title: 'Email', dataType: DataType.String },
    { key: 'column3', title: 'Phone', dataType: DataType.String },
    { key: 'column4', title: 'Username', dataType: DataType.String },
  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
};

// const fetchEmployeeInfo = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(res => {
//           console.log("fetchEmployeeInfo reached: " + res[0].name)
//           return res;
//       })
//       .catch(err => console.log("Error fetching employees: " + err))
// };
// fetchEmployeeInfo();

const OverviewDemo = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };

  return (
    <Table
      {...tableProps}
      dispatch={dispatch}
    />
  );
};

export default OverviewDemo;









// import React, { Component } from 'react';

// class Employees extends Component {

//     constructor() {
//         super();

//         this.state = {
//             employees: []
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(res => {
//                 console.log(res)
//                 this.setState({
//                     employees: res
//                 });
//             })
//             .catch(err => console.log("Error fetching employees: " + err))
//     };

//     render() {
//         return (
//             <ul>
//                 {this.state.employees.map(employee => (
//                     <li key={employee.id}>
//                         {employee.name} ----- {employee.name} ----- {employee.email} ----- {employee.phone}
//                     </li>
//                 ))}
//             </ul>
//         )
//     }

// };

// export default Employees;