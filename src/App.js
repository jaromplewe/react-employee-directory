import React, { Component } from 'react';
import Employees from './compnonents/employeeTable/Employees';
import Header from './compnonents/Header';
import SearchBar from './compnonents/SearchBar';


class App extends Component {

    constructor() {
        super();

        this.state = {
            employees: [],
            filteredEmployees: [],
            sortEmployeesByName: 'asc',
            searchInput: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 employees: res,
    //                 filteredEmployees: res
    //             });
    //         })
    //         .catch(err => console.log("Error fetching employees: " + err))
    // };

    toggleSort() {

    }
    
    render() {
        return (
            <div>
                <Header />

                <SearchBar />

                <button
                    onClick
                ></button>

                <Employees
                    employees={this.state.filteredEmployees}
                    toggleSort={this.toggleSort}
                />

            </div>
        );
    }
}

export default App;
