import React, { useEffect, useState, useCallback } from 'react';
import {Search, SearchIconWrapper, StyledInputBase} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';
import Asynchronous from './AutoComplete';

const SearchGlobal = ({sx, setApiResponse}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [newsText, setNewsText] = useState(null);

    const fetchData = useCallback(() => {
         if (selectedOption) {
            let formData = new FormData();
            formData.append('entityName', selectedOption.name);

            axios({
                method: 'post',
                url: 'https://b39a-2401-4900-1c2d-7a01-2c5f-7e23-fdfc-137d.ngrok-free.app/getCompanydetails/',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    console.log("🚀 ~ file: SearchGlobal.js:25 ~ .then ~ response:", response.data.PERSONAL_DETAILS.FULL_NAME)
                    
                    let formData1 = new FormData();
                    formData1.append('entityName', response.data.PERSONAL_DETAILS.FULL_NAME);
                    setApiResponse(response.data);  // Store the response
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        } else {
            console.log("No option selected");
        }
    }, [selectedOption, setApiResponse]);  // entityData is now a dependency


    return (
        <>
        <Stack direction="row" spacing={2}>
        <Asynchronous 
            onOptionSelect={setSelectedOption}
        />
        <Button onClick={fetchData}>Search</Button>
        </Stack>
        </>
    );
};

export default SearchGlobal;
