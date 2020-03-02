import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Filip',
            places: 3,
            image: './elephant-4389434_640.jpg'
        }
    ]

    return <UsersList items={USERS}/>
}


export default Users;