import React from 'react';


export const User = ({ user }) => {

    const { name, username, email } = user;

    return (
        <div>
            <p>{ name }</p>
            <p>{ username }</p>
            <p>{ email }</p>
        </div>
    );

};

