import React, { Component } from 'react';
import Employees from './compnonents/Employees';
import Header from './compnonents/Header';
import SearchBar from './compnonents/SearchBar';


class App extends Component {

    state = {
    }

    render() {
        return (
            <div>
                <Header
                    title="Employee Directory!"
                />
                <SearchBar/>


            </div>
        );
    }
}

export default App;
