import React, {useCallback, useState} from 'react';
import MessagesTriggerButton from "./MessagesTriggerButton";
import MessagesHeader from "./MessagesList/MessagesHeader";
import SettingHeader from "./MessagesSetting/SettingHeader";
import SettingsList from "./MessagesSetting/SettingsList";
import MessagesList from "./MessagesList";
import SearchMessages from "./SearchMessages";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from "@mui/material/Button";
import Div from "@jumbo/shared/Div";
import JumboDdPopover from "@jumbo/components/JumboDdPopover";
import {Card, CardActions, CardMedia, ThemeProvider} from "@mui/material";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";

const MessagesDropdown = () => {
    const [isCardVisible, setCardVisible] = useState(false); // start with the card hidden

    const handleClick = () => {
        setCardVisible(!isCardVisible); // toggle visibility on button click
      };
    
    const [showSettings, setShowSettings] = useState(false);
    const {theme} = useJumboTheme();

    const toggleSettingWindow = useCallback(() => {
        setShowSettings(showSettings => !showSettings);
    }, [setShowSettings]);

    return (
        <ThemeProvider theme={theme}>
            <JumboDdPopover
                triggerButton={<MessagesTriggerButton/>}
                disableInsideClick
            >
                {
                    showSettings ?
                        <Div sx={{width: 360, maxWidth: '100%'}}>
                            <SettingHeader backClickCallback={toggleSettingWindow}/>
                            <SettingsList/>
                        </Div>
                        :
                        <Card
                            sx={{
                                width: '400px',  // width of card
                                height: '600px',  // height of card
                                position: 'fixed',  // makes the card float
                                bottom: '10px',  // distance from bottom
                                right: '10px',  // distance from right
                            }}
                        >
                            <CardMedia
                                component="iframe"
                                sx={{ height: "100%" }} // You can adjust the height as you need.
                                title="Some title"
                                src="https://uploader-mini.vercel.app/" // Your iframe src goes here.
                            />
                        </Card>
                }
            </JumboDdPopover>
        </ThemeProvider>
    );
};

export default MessagesDropdown;
