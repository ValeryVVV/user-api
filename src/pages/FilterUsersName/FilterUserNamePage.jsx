import React from "react";
import { Box, TextField, Typography } from "@mui/material";

import { useStyles } from "./FilterUserStyles";


const FilterUserName = ({ value, onChange }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.flex}>
                <Typography className={classes.text}>Filter by user name</Typography>
                <TextField
                    size="small"
                    variant="outlined"
                    type='text'
                    value={value}
                    onChange={onChange}
                />
            </Box>
        </Box>
    )
};

export default FilterUserName;