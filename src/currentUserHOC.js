import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = `https://jsonplaceholder.typicode.com/users/1`;

export const currentUserHOC = Component => {

    const NewComponent = props => {

        const [user, setUser] = useState({});

        useEffect(() => {
            getUserData();
        }, []);

        const getUserData = async () => {
            const { data } = await axios.get(API);
            console.log(data);
        };

        return (<Component { ...props } user={ user } />);
    }
    return NewComponent;
};