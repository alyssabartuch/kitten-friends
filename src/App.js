import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { kittens } from './kittens';
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
        fetch('http://jsonplaceholder.typicode.com/users')
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
        if (this.isLoading) {
            return (
                <h1 className="tc">Loading</h1>
            );
        } else {
            const filteredKittens = this.state.kittens.filter(kitten => {
                return kitten.name.toLowerCase().includes(this.state.searchField);
            });

            return (
                <div className="tc">
                    <h1 id="heading">Kitten Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList kittens={filteredKittens} />
                    </Scroll>
                </div>
            );
        }
    }  
}

export default App;