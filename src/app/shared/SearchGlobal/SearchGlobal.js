import React, { useState } from 'react';
import {Search, SearchIconWrapper, StyledInputBase} from "./style";
import SearchIcon from "@mui/icons-material/Search";

const SearchGlobal = ({sx}) => {
    const [searchValue, setSearchValue] = useState('');  // Add state for search value
    const handleChange = (e) => {    // Add function to handle changes
        setSearchValue(e.target.value);
        console.log(searchValue);
    };
    return (
        <Search sx={sx}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Search"
                inputProps={{'aria-label': 'search'}}
                value={searchValue}    // Use state value as input value
                onChange={handleChange}  // Use function to handle changes

            />
        </Search>
    );
};

export default SearchGlobal;
