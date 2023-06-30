import { Card, CardMedia, Chip, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { users } from './data';
import UserItem from './UserItem';
import SearchGlobal from 'app/shared/SearchGlobal/SearchGlobal';
import JumboCardQuick from '@jumbo/components/JumboCardQuick/JumboCardQuick';
import JumboContentLayout from '@jumbo/components/JumboContentLayout/JumboContentLayout';
import Asynchronous from 'app/shared/SearchGlobal/AutoComplete';
import axios from 'axios';
import FolderIcon from '@mui/icons-material/Folder';
const Home = () => {
    const [apiResponse, setApiResponse] = useState(null);
    // const [isCardVisible, setCardVisible] = useState(false); // start with the card hidden

    // const handleClick = () => {
    //     setCardVisible(!isCardVisible); // toggle visibility on button click
    //   };
    

    const CKYCData = [

        {
            PERSONAL_DETAILS: {
                CKYC_NO: "70086178766160",
                FULL_NAME: "ADANI WILMAR LIMITED",
                DOB: "22-01-1999",
                PLACE_INC: "AHMEDABAD",
                PAN: "AABCA8056G",
                PERM_LINE1: "FORTUNE HOUSE",
                PERM_LINE2: "RAILWAY CROSSING",
                PERM_LINE3: "",
                PERM_CITY: "AHMEDABAD",
                PERM_DIST: "AHMEDABAD",
                PERM_STATE: "GJ",
                PERM_COUNTRY: "IN",
                PERM_PIN: "380009",
                PERM_POA: "07",
                CORRES_LINE1: "10TH FLOOR TULSIANI CHAMBER",
                CORRES_LINE2: "NARIMAN POINT",
                CORRES_LINE3: "Test",
                CORRES_CITY: "AHMEDABAD",
                CORRES_DIST: "AHMEDABAD",
                CORRES_STATE: "GJ",
                CORRES_COUNTRY: "IN",
                CORRES_PIN: "380009",
                CORRES_POA: "00",
                PROOF_ADDRESS: "0",
                OFF_STD_CODE: "",
                OFF_TEL_NUM: "",
                MOB_CODE1: "",
                MOB_NUM1: "",
                MOB_CODE2: "",
                MOB_NUM2: "",
                EMAIL: "GAURISHANKAR.MISHRA@WILMAR.COM",
                EMAIL2: "SAGAR.TRIVEDI@WILMAR.COM",
                REMARKS: ""
            },



            RELATED_PERSON_DETAILS: [
                {
                 RELATED_PERSONS: {
                        PREFIX: "MR",
                        FNAME: "AJAY",
                        MNAME: "",
                        LNAME: "RAJGURU",
                        FATHER_PREFIX: "MR",
                        FATHER_FNAME: "RAHUL",
                        FATHER_MNAME: "KISHAN",
                        FATHER_LNAME: "SABLE",
                        MOTHER_PREFIX: "MRS",
                        MOTHER_ENAME: "LATA",
                        MOTHER_MNAME: "ASHA",
                        MOTHER_LNAME: "KORU",
                        DOB: "04-07-1984",
                        GENDER: "M"
                    }
                },
                {
                    RELATED_PERSONS: {
                        PREFIX: "MR",
                        FNAME: "ASHWINKUMAR",
                        MNAME: "RAMABHAI",
                        LNAME: "PATEL",
                        FATHER_PREFIX: "MR",
                        FATHER_FNAME: "ABHIJIT",
                        FATHER_MNAME: "LAXMIKANT",
                        FATHER_LNAME: "JOSHI",
                        MOTHER_PREFIX: "MRS",
                        MOTHER_ENAME: "",
                        MOTHER_MNAME: "",
                        MOTHER_LNAME: "",
                        DOB: "04-07-1982",
                        GENDER: "M"
                    }
                }
            ]
        }


    ];
    const mockData = [
        {
            sentiment_analysis: {
                score: "8/10",
                remark: "The sentiment of this text is generally positive. Adani Group is making significant investments in various sectors, and Gautam Adani is making a positive impact on the economy.The group has denied all allegations and is plotting a comeback strategy. Adani has also won the world's largest solar bid and is investing in green energy. Overall, the sentiment of this text is positive."
            },
            political_inclination: {
                // score: {
                //     left_wing: "2/10",
                //     right_wing: "8/10"
                // },
                score: "5/10",
                remark: "The text is mostly focused on the business activities of Gautam Adani, the founder and chairman of the Adani Group. Adani has been described as being close to the Indian Prime Minister Narendra Modi and his ruling Bharatiya Janata Party, which is a right-wing political party. Adani has also won several large bids and investments, which is indicative of his right-wing economic policies."
            },
            criminal_background: {
                score: "0/10",
                remark: "No criminal record was found for Gautam Adani, the Chairman of the Adani Group. He has been involved in various business ventures, including port development and operations in India, solar energy, and airport acquisitions. He has also been involved in philanthropic activities, such as fundraising for victims of the Odisha train tragedy. There is no evidence of any criminal activity associated with Gautam Adani."
            },
            traveled_sanctioned_country: {
                score: "8/10",
                remark: "Gautam Adani, Chairman of the Adani Group, is a billionaire industrialist who has embarked on a high-stakes journey to Afghanistan with the aim of striking a significant trade deal. He has also sought shareholder approval for Adani Transmission Ltd and Adani Green Energy, and has denied all allegations by Hindenburg Research. Adani has also pledged to bear the expenses of children who lost their parents in the Odisha train tragedy, and is investing US$70 billion"
            },
            business_exposer : {
                remark: "The text provides a comprehensive overview of the Adani Group's business activities, including their investments in energy, ports, and airports, as well as their involvement in the Odisha train tragedy and their response to the Hindenburg Research report. The text also mentions Adani's involvement in Afghanistan, as well as his recent success in winning the world's largest solar bid. ",
                score: "8/10"
            }
        }
    ]

    return (
         <React.Fragment>
            <SearchGlobal
                sx={{
                    maxWidth: { xs: 240, md: 320 }
                }}
                mb={4}
                setApiResponse={setApiResponse}
            />
            
            {apiResponse &&
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    sx={{ marginTop: '20px', paddingX: '20px' }}
                >

                    <Grid container item xs={4} mt={3} sx={{width: '100%'}}>
                        <Grid container item spacing={3}>
                            <Typography variant={'h2'} mb={1}>Company profile</Typography>
                            <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }}>
                                <Typography variant={'h2'} mb={1}>{apiResponse.PERSONAL_DETAILS.FULL_NAME}</Typography>
                                <Typography variant={'h6'} mb={1}><strong>Date of Incorporation</strong> : {apiResponse.PERSONAL_DETAILS.DOB}</Typography>
                                <Typography variant={'h6'} mb={1}><strong>Place of Incorporation </strong>: {apiResponse.PERSONAL_DETAILS.PLACE_INC}</Typography>
                                <Typography variant={'h6'} mb={1}><strong>PAN </strong>: {apiResponse.PERSONAL_DETAILS.PAN}</Typography>
                                <Typography variant={'h6'} mb={1}><strong>Email </strong>: {apiResponse.url}</Typography>
                                <Typography variant={'p'} mb={3}>{apiResponse.about}</Typography>
                            </Card>

                        </Grid>
                       
                        <Grid container item spacing={3} mt={1} sx={{width:'100%'}}>
                                <Typography variant={'h2'} mb={1}>Connected parties</Typography>
                                {apiResponse.RELATED_PERSON_DETAILS.map((user, index) => (
                                    <UserItem id={index} user={user.RELATED_PERSONS} key={index} sx={{width: '100%'}} />
                                ))}
                        </Grid>
                        <Grid container direction={"column"} item spacing={3} mt={1} sx={{width:'100%'}}>
                            <Typography variant={'h2'} mb={1}>Documents</Typography>
                            <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }}>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>  
                                            <FolderIcon />
                                             {/* <DescriptionIcon /> */}
                                        </ListItemIcon>
                                        <ListItemText primary="Annual Report 2022-23" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                        <FolderIcon />
                                            {/* <DescriptionIcon /> */}
                                        </ListItemIcon>
                                        <ListItemText primary="Annual Filling 2022-23" />
                                    </ListItemButton>
                                </ListItem>
                                </List>
                                    </Card>
                        </Grid>

                    </Grid>
                    <Grid item xs={8}>
                    <Typography variant={'h2'} mb={1}>Sentiment analysis</Typography>
                           
                            <Grid 
                                  container
                                  spacing={2}
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="flex-start"
                                  mt={-1}
                                //   sx={{ marginTop: '0px' }}

                            >
                                <Grid container item xs={6} spacing={1}>
                                    <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }} >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Company outlook</Typography>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >

                                                <Typography variant={'h4'} pt={1} mr={1}>Score: {mockData[0].sentiment_analysis.score} </Typography>
                                                <Chip
                                                    color="success"
                                                    onClick={function () { }}
                                                    size="sm"
                                                    variant="soft"
                                                    label="Positive"
                                                />
                                            </Grid>
                                            <Typography variant={'p'} mb={3}>{mockData[0].sentiment_analysis.remark}</Typography>
                                        </Grid>
                                    </Card>
                                    <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }} >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Political exposure</Typography>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >

                                                {/* {/* <Typography variant={'h4'} pt={1} mr={1}>Left : {mockData[0].political_inclination.score.left_wing} | </Typography> */}
                                                <Typography variant={'h4'} pt={1} mr={1}>Score : {mockData[0].political_inclination.score} </Typography> 

                                                <Chip
                                                    color="info"
                                                    onClick={function () { }}
                                                    size="sm"
                                                    variant="soft"
                                                    label="Moderate exposure"
                                                />
                                            </Grid>
                                            <Typography variant={'p'} mb={3}>{mockData[0].political_inclination.remark}</Typography>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid container item xs={6} spacing={1}>
                                    <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }} >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Criminal background</Typography>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >

                                                <Typography variant={'h4'} pt={1} mr={1}>Score : {mockData[0].criminal_background.score}</Typography>

                                                <Chip
                                                    color="info"
                                                    onClick={function () { }}
                                                    size="sm"
                                                    variant="soft"
                                                    label="No criminal record"
                                                />
                                            </Grid>
                                            <Typography variant={'p'} mb={3}>{mockData[0].criminal_background.remark}</Typography>
                                        </Grid>
                                    </Card>
                                    <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }} >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Business exposure</Typography>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >

                                                <Typography variant={'h4'} pt={1} mr={1}>Score : {mockData[0].business_exposer.score}</Typography>

                                                <Chip
                                                    color="warning"
                                                    onClick={function () { }}
                                                    size="sm"
                                                    variant="soft"
                                                    label="Moderate risk"
                                                />
                                            </Grid>
                                            <Typography variant={'p'} mb={3}>{mockData[0].business_exposer.remark}</Typography>
                                        </Grid>
                                    </Card>
                                </Grid>
                                 
                                    
                                    {/* <Divider /> */}

                             </Grid>
                    </Grid>
                </Grid>
                
            }

            

        </React.Fragment>
    );
};

export default Home;