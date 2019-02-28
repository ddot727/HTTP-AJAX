import React from 'react';

const Friends = props => {
    return(
        <div>
            {props.friends.map(friend =>
                <div key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={e => props.deleteFriend(e, friend.id)}>Nah</button>
                    <button onClick={e => props.setUpdateForm(e, friend.id)}>Update</button>
                </div>    )}
        </div>
    )
}

export default Friends;