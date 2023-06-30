import React from 'react';
import TabContext from "@mui/lab/TabContext";
import Div from "@jumbo/shared/Div";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import {AvatarGroup, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import styled from "@emotion/styled";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const StyledListItemIcon = styled(ListItemIcon)(({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: 24,
    height: 48,
    width: 48,
    borderRadius: '50%',
    minWidth: 42,
    marginRight: 16,
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    border: `solid 1px ${theme.palette.divider}`
}));
const About = ({user}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <JumboCardQuick
            title={"About"}
            action={
                <TabContext value={value}>
                    <Div
                        sx={{
                            marginTop: -2.25,
                            marginBottom: -2.5,

                            '& .MuiTab-root': {
                                py: 2.5
                            }
                        }}
                    >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Overview" value="1"/>
                            <Tab label="Work" value="2"/>
                            {/* <Tab label="Education" value="3"/> */}
                        </TabList>
                    </Div>
                </TabContext>
            }
            headerSx={{
                borderBottom: 1, borderColor: 'divider'
            }}
            sx={{mb: 3.75}}

        >
            <List
                disablePadding
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: theme => theme.spacing(0, -2),
                }}
            >
                <ListItem
                    sx={{
                        width: {xs: '100%', sm: '50%', xl: '33.33%'}
                    }}
                >
                    <StyledListItemIcon>
                        <ApartmentIcon fontSize={"inherit"}/>
                    </StyledListItemIcon>
                    <ListItemText
                        primary={<Typography fontSize={"12px"} variant="h6" color="text.secondary" mb={.5}>
                            Works as</Typography>}
                        secondary={<Typography variant="body1" color="text.primary">
                          {user.designation}</Typography>}
                    />
                </ListItem>
                <ListItem
                    sx={{
                        width: {xs: '100%', sm: '50%', xl: '33.33%'}
                    }}
                >
                    <StyledListItemIcon>
                        <CakeOutlinedIcon fontSize={"inherit"}/>
                    </StyledListItemIcon>
                    <ListItemText
                        primary={<Typography fontSize={"12px"} variant="h6" color="text.secondary"
                                             mb={.5}>Birthday</Typography>}
                        secondary={<Typography variant="body1" color="text.primary">{user.birthday}</Typography>}
                    />
                </ListItem>
                <ListItem
                    sx={{
                        width: {xs: '100%', sm: '50%', xl: '33.33%'}
                    }}
                >
                    <StyledListItemIcon>
                        <SchoolOutlinedIcon fontSize={"inherit"}/>
                    </StyledListItemIcon>
                    <ListItemText
                        primary={<Typography fontSize={"12px"} variant="h6" color="text.secondary" mb={.5}>Went
                            to</Typography>}
                        secondary={<Typography variant="body1" color="text.primary">Not available</Typography>}
                    />
                </ListItem>
                <ListItem
                    sx={{
                        width: {xs: '100%', sm: '50%', xl: '33.33%'}
                    }}
                >
                    <StyledListItemIcon>
                        <CottageOutlinedIcon fontSize={"inherit"}/>
                    </StyledListItemIcon>
                    <ListItemText
                        primary={<Typography fontSize={"12px"} variant="h6" color="text.secondary" mb={.5}>Domicile
                            </Typography>}
                        secondary={<Typography variant="body1" color="text.primary">India</Typography>}
                    />
                </ListItem>
                <ListItem
                    sx={{
                        width: {xs: '100%', xl: '33.33%'}
                    }}
                >
                    <StyledListItemIcon>
                        <GroupsOutlinedIcon fontSize={"inherit"}/>
                    </StyledListItemIcon>
                    <ListItemText
                        primary={<Typography fontSize={"12px"} variant="h6" color="text.secondary" mb={.5}>Fathers
                            name</Typography>}
                        secondary={
                            <Typography component={"div"} variant={'body1'}>
                                Shantilal Adani
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem
                    sx={{
                        width: {xs: '100%', xl: '33.33%'}
                    }}
                >
                    <StyledListItemIcon>
                        <GroupsOutlinedIcon fontSize={"inherit"}/>
                    </StyledListItemIcon>
                    <ListItemText
                        primary={<Typography fontSize={"12px"} variant="h6" color="text.secondary" mb={.5}>Mothers
                            name</Typography>}
                        secondary={
                            <Typography component={"div"} variant={'body1'}>
                                Shanti Adani
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </JumboCardQuick>
    );
};

export default About;
