import React, { Component } from 'react';
import Employees from './compnonents/Employees';
import Header from './compnonents/Header';
import SearchBar from './compnonents/SearchBar';


class App extends Component {

    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header
                    title="Employee Directory!"
                />

                <SearchBar/>

                <Employees/>

            </div>
        );
    }
}

export default App;
