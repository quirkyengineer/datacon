import React, { useEffect, useState, useCallback } from 'react';
import {Search, SearchIconWrapper, StyledInputBase} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';
import Asynchronous from './AutoComplete';

const SearchGlobal = ({sx, setApiResponse}) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (e) => {    
        setSearchValue(e.target.value);
     };

    // const fetchData = useCallback(() => {
    //     axios.get(`https://649a9b61bf7c145d02391c63.mockapi.io/search`)
    //         .then((response) => {
    //              setApiResponse(response.data);  // Store the response
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data: ', error);
    //         });
    // }, [setApiResponse]);
 
// Assume setEntityData is called somewhere else to set the value of entityData

    const fetchData = useCallback(() => {

        let formData = new FormData();
        formData.append('entityName', selectedOption);

        axios({
            method: 'post',
            url: 'https://b39a-2401-4900-1c2d-7a01-2c5f-7e23-fdfc-137d.ngrok-free.app/getCompanydetails/',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                setApiResponse(response.data);  // Store the response
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [setApiResponse]);  // entityData is now a dependency


    return (
        <>
        <Stack direction="row" spacing={2}>
        {/* <Search sx={sx}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Search"
                inputProps={{'aria-label': 'search'}}
                value={searchValue}
                onChange={handleChange}
            />
        </Search> */}
              {/* <h1>Selected Option: {selectedOption ? selectedOption.name : 'None'}</h1> */}

        <Asynchronous 
            onOptionSelect={setSelectedOption}
        />
        <Button onClick={fetchData}>Search</Button>
        </Stack>
        </>
    );
};

export default SearchGlobal;
