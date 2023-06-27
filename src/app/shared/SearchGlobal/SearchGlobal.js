import React, { useEffect, useState, useCallback } from 'react';
import {Search, SearchIconWrapper, StyledInputBase} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';

const SearchGlobal = ({sx, setApiResponse}) => {
    const [searchValue, setSearchValue] = useState('');
 
    const handleChange = (e) => {    
        setSearchValue(e.target.value);
    };

    const fetchData = useCallback(() => {
        axios.get(`https://649a9b61bf7c145d02391c63.mockapi.io/search`)
            .then((response) => {
                 setApiResponse(response.data);  // Store the response
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [setApiResponse]);

    return (
        <>
        <Stack direction="row" spacing={2}>
        <Search sx={sx}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Search"
                inputProps={{'aria-label': 'search'}}
                value={searchValue}
                onChange={handleChange}
            />
        </Search>

        <Button onClick={fetchData}>Search</Button>
        </Stack>
        </>
    );
};

export default SearchGlobal;
