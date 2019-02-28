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
      activeFriend: null,
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

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push('/friendform');
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null,
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
          <Friends {...this.state} {...props} 
            deleteFriend={this.deleteFriend} 
            setUpdateForm={this.setUpdateForm}
          />} />
 
        <Route
          exact path="/friendform"
          render={props => 
          <FriendForm 
            {...props} 
            activeFriend={this.state.activeFriend}
            addFriend={this.addFriend}
            updateFriend={this.updateFriend}
          />} />
        
      </div>
    );
  }
}

export default App;
