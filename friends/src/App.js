import React, { Component } from 'react';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import { Route, NavLink } from 'react-router-dom';
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
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends:res.data }))
      .catch(err => this.setState({ error:err }));
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">My Friend Lists</h1>
          <div className="nav-links">
            <NavLink exact to="/">
              <button>Home</button>
            </NavLink>
            <NavLink to="/friendform"><button>Add Friend</button></NavLink>
          </div>
        </nav>
        
        <Route
          exact path="/"
          render={props => 
          <Friends {...this.state} {...props} deleteFriend={this.deleteFriend} 
          />} />

        <Route
          exact path="/friendform"
          render={props => 
          <FriendForm {...props} addFriend={this.addFriend}
          />} />
        
      </div>
    );
  }
}

export default App;
