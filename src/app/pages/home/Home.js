import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { users } from './data';
import UserItem from './UserItem';
import SearchGlobal from 'app/shared/SearchGlobal/SearchGlobal';

const Home = () => {
    const [apiResponse, setApiResponse] = useState(null);
    console.log(apiResponse)
    return (
        <React.Fragment>
            <SearchGlobal
                sx={{
                    maxWidth: { xs: 240, md: 320 }
                }}
                setApiResponse={setApiResponse}
            />
            {apiResponse && <Typography variant={'h2'} mt={4} mb={1}>{apiResponse[0].company}</Typography>}
            {apiResponse && <Typography variant={'p'}  mb={3}>{apiResponse[0].companydesc}</Typography>}

            { apiResponse &&
                apiResponse.map((user, index) => (
                    <UserItem user={user} key={index} />
                ))
            }
            
        </React.Fragment>
    );
};

export default Home;