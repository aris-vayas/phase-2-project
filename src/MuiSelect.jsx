import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  console.log({ country });
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="large"
        helperText="Select Your Country"
        // error
        color="secondary"
      >
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="UK">United Kingdom</MenuItem>
        <MenuItem value="PR">Puerto Rico</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
