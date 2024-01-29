import React from "react";
import { TextField } from "@mui/material";

import { FilterBox, FilterText, FilterFlexBox } from "./FilterUserStyles";


const FilterUserName = ({ value, onChange }) => {

    return (
        <FilterBox>
            <FilterFlexBox>
                <FilterText>Filter by user name</FilterText>
                <TextField
                    size="small"
                    variant="outlined"
                    type='text'
                    value={value}
                    onChange={onChange}
                />
            </FilterFlexBox>
        </FilterBox>
    )
};

export default FilterUserName;