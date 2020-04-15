import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoudry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            kittens: [],
            searchField: '',
            isLoading: true
        }
        // console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { 
                return response.json() })
            .then(users => { 
                this.setState({ kittens: users, isLoading: false }) 
            });
        // console.log('component mounted');
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        // console.log('render');
        const { kittens, searchField, isLoading } = this.state;
        const filteredKittens = kittens.filter(kitten => {
            return kitten.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (isLoading) ?
        <h1 className="tc">Loading...</h1> : (
            <div className="tc">
                <h1 id="heading">Kitten Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoudry>
                        <CardList kittens={filteredKittens} />
                    </ErrorBoudry>
                </Scroll>
            </div>
        );
    }  
}

export default App;