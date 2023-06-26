import { Typography } from '@mui/material';
import React from 'react';
import { users } from './data';
import UserItem from './UserItem';

const Home = () => {
    return (
        <React.Fragment>
        <Typography variant={'h2'} mb={3}>Search result</Typography>
        {
            users.map((user, index) => (
                <UserItem user={user} key={index}/>
            ))
        }
    </React.Fragment>
    );
};

export default Home;