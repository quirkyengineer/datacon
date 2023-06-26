import React from 'react';
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import {Card, IconButton, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import JumboBookmark from "@jumbo/components/JumboBookmark";
import styled from "@emotion/styled";
import Span from "@jumbo/shared/Span";
import { Cancel, Check, HomeRepairServiceOutlined } from '@mui/icons-material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Cross } from 'recharts';

const Item = styled(Span)(({theme}) => ({
    padding: theme.spacing(0, 1),
}));

const UserItem = ({user}) => {
    return (
        <Card sx={{mb: 1}}>
            <Stack direction={"row"} alignItems={"center"} sx={{p: theme => theme.spacing(2, 1)}}>
                <Item
                    sx={{
                        flex: {xs: 1, md: '0 1 45%', lg: '0 1 35%'}
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'}>
                        {/* <Item sx={{ml: -1}}>
                            <JumboBookmark value={user.isFavorite} sx={{verticalAlign: 'middle'}}/>
                        </Item> */}
                        <Item>
                            <Badge overlap="circular" variant="dot"
                                   anchorOrigin={{
                                       vertical: 'bottom',
                                       horizontal: 'right',
                                   }}
                                   sx={{
                                       '.MuiBadge-badge': {
                                           border: '2px solid #FFF',
                                           height: '14px',
                                           width: '14px',
                                           borderRadius: '50%',
                                           bgcolor: user.isOnline ? "success.main" : "#757575"
                                       }
                                   }}
                            >
                                <Avatar
                                    sx={{
                                        width: 56,
                                        height: 56
                                    }}
                                    alt={`${user.firstName} 
                                    ${user.lastName}`}
                                    src={user.profilePic}
                                />
                            </Badge>
                        </Item>
                        <Item>
                            <Typography variant={"h6"} mb={.5}>{`${user.firstName} ${user.lastName}`}</Typography>
                            <Typography variant={"body1"} color="text.secondary">{user.email}</Typography>
                        </Item>
                    </Stack>
                </Item>
                <Item
                    sx={{
                        alignSelf: 'flex-start',
                        flexBasis: {md: '28%', lg: '18%'},
                        display: {xs: 'none', md: 'block'},
                     }}
                    
                >
                    <Typography variant={"h6"}  mt={1} mb={.5}>Designation</Typography>
                    <Typography variant={"body1"} color="text.secondary">{user.title}</Typography>
                </Item>
                <Item
                    sx={{
                        flexBasis: '30%',
                        display: {xs: 'none', lg: 'block'}
                    }}
                >
                    <Stack spacing={2} direction={"row"} alignItems={"center"} sx={{textAlign: 'center'}}>
                        <Item>
                            <Typography variant={"body1"} color="text.secondary">Linkedin</Typography>
                            <Typography variant={"h6"} mb={.5}>
                                  {user.socialLinks.linkedIn ? <Check color="success" /> : <CloseOutlinedIcon color="error" />   }
                                
                            </Typography>

                        </Item>
                        <Item>
                            <Typography variant={"body1"} color="text.secondary">Twitter</Typography>
                            <Typography variant={"h6"} mb={.5}>
                            {user.socialLinks.twitter ? <Check color="success" /> : <CloseOutlinedIcon color="error" />   }
                            </Typography>

                        </Item>
                        <Item>
                            <Typography variant={"body1"} color="text.secondary">Facebook</Typography>
                            <Typography variant={"h6"} mb={.5}>
                            {user.socialLinks.facebook ? <Check color="success" /> : <CloseOutlinedIcon color="error" />   }
                            </Typography>

                        </Item>
                    </Stack>
                </Item>
                <Item
                    sx={{
                        ml: 'auto',
                        display: {xs: 'none', sm: 'block'}
                    }}
                >
                    <Button sx={{minWidth: 92}} disableElevation variant={"contained"} size={"small"}
                            // color={user.isFollowing ? "error" : "primary"}>
                            color={"primary"}>

                        {/* {user.isFollowing ? "Unfollow" : "Follow"} */} Details
                    </Button>
                </Item>
                <Item sx={{ml: {xs: 'auto', sm: 0}}}>
                    <IconButton aria-label="settings">
                        <MoreHorizIcon/>
                    </IconButton>
                </Item>
            </Stack>
        </Card>
    );
};

export default UserItem;