import React from 'react';
import Grid from "@mui/material/Grid";
import Contacts from "./components/Contacts";
import Friends from "./components/Friends";
import Photos from "./components/Photos";
import { Card, Chip, Typography } from '@mui/material';

const UserProfileSidebar = () => {

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
        <Grid container spacing={3.75}>
            <Grid item xs={12} md={6} lg={12}>
                <Contacts/>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
                     <Typography variant={'h2'} mb={1}>Sentiment analysis</Typography>

                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        mt={-1}
                    //   sx={{ marginTop: '0px' }}

                    >
                        <Grid container item xs={12} spacing={1}>
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
                        <Grid container item xs={12} spacing={1}>
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

                                    <Typography variant='h3'>Sanctions exposure</Typography>
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
                            </Card>
                        </Grid>


                        {/* <Divider /> */}

                    </Grid>
             </Grid>
            <Grid item xs={12} md={6} lg={12}>
                {/* <Photos/> */}
            </Grid>
        </Grid>
    );
};

export default UserProfileSidebar;
