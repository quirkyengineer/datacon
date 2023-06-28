import React from 'react';
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";

const Biography = ({bio}) => {
    return (
        <JumboCardQuick
            title={"Biography"}
            // subheader={"A little flash back of Kiley Brown"}
            headerSx={{pb: 0}}
            sx={{mb: 3.75}}
        >
            {/* <Typography variant="h3" fontWeight="300" mb={2}>{}</Typography> */}
            <Typography variant="body1" mb={2}>{bio}</Typography>
            {/* <Typography variant="body1" mb={2}>Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque
                imperdiet. Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo
                tortor.</Typography> */}
        </JumboCardQuick>
    );
};

export default Biography;
