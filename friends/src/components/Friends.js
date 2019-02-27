import React from 'react';

const Friends = props => {
    return(
        <div>
            {props.friends.map(friend =>
                <div key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>    )}
        </div>
    )
}

export default Friends;