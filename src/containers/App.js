import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchField: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this)
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ Robots: users }))
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { Robots, searchField } = this.state
        const filteredArray = Robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !Robots.length ?
            <h1>Loading...Please Wait</h1>
            :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                        <CardList Robots={filteredArray} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )

    }
}


export default App;