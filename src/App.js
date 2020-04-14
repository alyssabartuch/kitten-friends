import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { kittens } from './kittens';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            kittens: kittens,
            searchField: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        this.setState({ kittens });
        console.log('component mounted');
    }

    onSearchChange = (event) => {
        let searchField = this.state.searchField;
        searchField = event.target.value;
        this.setState({ searchField })
    }

    render() {
        const filteredKittens = this.state.kittens.filter(kitten => {
            return kitten.name.toLowerCase().includes(this.state.searchField);
        });

        console.log('render');
        
        return (
            <div className="tc">
                <h1 id="heading">Kitten Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList kittens={filteredKittens} />
            </div>
            
        );
    }  
}

export default App;