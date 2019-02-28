import React, { Component } from 'react';
import Friends from './components/Friends';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(res => this.setState({ friends:res.data }))
      .catch(err => this.setState({ error:err }));
  }
  
  render() {
    return (
      <div className="App">
        <Friends {...this.state} />
      </div>
    );
  }
}

export default App;
