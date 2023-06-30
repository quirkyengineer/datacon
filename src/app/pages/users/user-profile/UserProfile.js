import React, { useEffect, useState } from 'react';
import Header from "./Header";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";
import Events from "../../../shared/widgets/Events";
import {alpha} from "@mui/material/styles";
import About from "./components/About";
import Biography from "./components/Biography";
import UserProfileSidebar from "./UserProfileSidebar";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const UserProfile = () => {
    const {theme} = useJumboTheme();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        axios.get(`https://649a9b61bf7c145d02391c63.mockapi.io/linkedin`)
            .then(response => {
          
                // const user = response.data.find(user => Number(user.id) === Number(id));
                setUser(response.data[0]);
                setIsLoading(false); // Set loading to false after the data is fetched

             })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }, [id]);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <JumboContentLayout
            header={<Header user={user}/>}
            sidebar={<UserProfileSidebar/>}
            layoutOptions={{
                header: {
                    sx: {
                        mt: -4,
                        mb: -7.25,
                        mx: {xs: -4, lg: -6},
                        p: {xs: theme.spacing(6, 4, 11), lg: theme.spacing(6, 6, 11)},
                        background: `#002447 url(${getAssetPath(`${ASSET_IMAGES}/profile-bg.jpg`,"1920x580")}) no-repeat center`,
                        backgroundSize: 'cover',
                        color: 'common.white',
                        position: 'relative',

                        '&::after': {
                            display: 'inline-block',
                            position: 'absolute',
                            content: `''`,
                            inset: 0,
                            backgroundColor: alpha(theme.palette.common.black, .65)
                        }
                    }
                },
                sidebar: {
                    sx: {
                        mr: 3.75,
                        width: {xs: '100%', lg: '33%'},
                        [theme.breakpoints.down('lg')]: {
                            minHeight: 0,
                            mr: 0,
                            order: 2
                        }
                    }
                },
                wrapper: {
                    sx: {
                        [theme.breakpoints.down('lg')]: {
                            flexDirection: 'column'
                        }
                    }
                },
                main: {
                    sx: {
                        [theme.breakpoints.down('lg')]: {
                            minHeight: 0
                        }
                    }
                }
            }}
        >
            <About user={user}/>
            <Biography bio={user.about_info}/>
            {/* <Events sx={{mb: {xs: 3.75, lg: 0}}}/> */}
        </JumboContentLayout>
    );
};

export default UserProfile;
