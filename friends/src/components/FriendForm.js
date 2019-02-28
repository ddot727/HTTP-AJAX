import React from 'react';


class FriendForm extends React.Component {
    state = { 
        friend: {
            name: "",
            age: "",
            email: "",
        }
     }

    render() { 
        return ( 
            <div>
                <form>
                    <input 
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Name"
                        value={this.state.friend.name} 
                    />
                    <input 
                        type="number"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="Age"
                        value={this.state.friend.age} 
                    />
                    <input 
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="Email"
                        value={this.state.friend.email} 
                    />
                    <button>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default FriendForm;

