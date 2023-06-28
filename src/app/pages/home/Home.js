import { Card, Chip, Divider, Grid, List, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { users } from './data';
import UserItem from './UserItem';
import SearchGlobal from 'app/shared/SearchGlobal/SearchGlobal';
import JumboCardQuick from '@jumbo/components/JumboCardQuick/JumboCardQuick';
import JumboContentLayout from '@jumbo/components/JumboContentLayout/JumboContentLayout';

const Home = () => {
    const [apiResponse, setApiResponse] = useState(null);

    const mockData = [
        {
            sentiment_analysis: {
                score: "8/10",
                remark: "The sentiment of this text is generally positive. Adani Group is making significant investments in various sectors, and Gautam Adani is making a positive impact on the economy.The group has denied all allegations and is plotting a comeback strategy. Adani has also won the world's largest solar bid and is investing in green energy. Overall, the sentiment of this text is positive."
            },
            political_inclination: {
                score: {
                    left_wing: "2/10",
                    right_wing: "8/10"
                },
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
            business_exposer: "updated"
        }
    ]

    return (
        console.log(mockData),
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
                    sx={{ marginTop: '20px' }}
                >

                    <Grid container item xs={4} mt={3}>
                        <Grid container item spacing={3}>
                            <Typography variant={'h2'} mb={1}>Company profile</Typography>
                            <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }}>
                                <Typography variant={'h2'} mb={1}>{apiResponse[0].company}</Typography>
                                <Typography variant={'p'} mb={3}>{apiResponse[0].companydesc}</Typography>
                            </Card>

                        </Grid>
                        <Grid container item spacing={3}>
                            <Typography variant={'h2'} mt={3}>Sentiment analysis

                            </Typography>
                            <Card variant="outlined" sx={{ padding: '18px', marginBottom: '20px' }}>
                                <List>
                                    <ListItem >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Company sentiment</Typography>
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
                                    </ListItem>
                                    <Divider />
                                    <ListItem >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Political inclination</Typography>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >

                                                <Typography variant={'h4'} pt={1} mr={1}>Left : {mockData[0].political_inclination.score.left_wing} | </Typography>
                                                <Typography variant={'h4'} pt={1} mr={1}>Right : {mockData[0].political_inclination.score.right_wing} </Typography>

                                                <Chip
                                                    color="warning"
                                                    onClick={function () { }}
                                                    size="sm"
                                                    variant="soft"
                                                    label="Right wing dominant"
                                                />
                                            </Grid>
                                            <Typography variant={'p'} mb={3}>{mockData[0].political_inclination.remark}</Typography>
                                        </Grid>
                                    </ListItem>
                                    <Divider />
                                    <ListItem >
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
                                    </ListItem>
                                    <Divider />
                                    <ListItem >
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="flex-start"
                                            mb={1}
                                        >

                                            <Typography variant='h3'>Travel to sanctioned countries</Typography>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >

                                                <Typography variant={'h4'} pt={1} mr={1}>Score : {mockData[0].traveled_sanctioned_country.score}</Typography>

                                                <Chip
                                                    color="warning"
                                                    onClick={function () { }}
                                                    size="sm"
                                                    variant="soft"
                                                    label="Moderate risk"
                                                />
                                            </Grid>
                                            <Typography variant={'p'} mb={3}>{mockData[0].traveled_sanctioned_country.remark}</Typography>
                                        </Grid>
                                    </ListItem>
                                    {/* <Divider /> */}

                                </List>


                            </Card>
                        </Grid>
                        <Grid container item spacing={3}>
                        </Grid>

                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant={'h2'} mb={1}>Connected parties</Typography>
                        {apiResponse.map((user, index) => (
                            <UserItem user={user} key={index} />
                        ))}
                    </Grid>
                </Grid>

            }



        </React.Fragment>
    );
};

export default Home;