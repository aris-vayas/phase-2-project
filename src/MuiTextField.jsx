import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={7}>
      <Stack direction="row" spacing={5}>
        <TextField
          variant="outlined"
          label="name"
          size="small"
          color="success"
          error={!value}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          helperText={
            value ? "Required" : "Don't Share Your Password With Anyone"
          }
        />
        <TextField
          variant="filled"
          label="name"
          size="medium"
          color="secondary"
        />
        <TextField
          variant="standard"
          label="name"
          size="large"
          color="primary"
        />
      </Stack>
      <Stack>
        <TextField
          variant="standard"
          label="name"
          size="large"
          color="error"
          required
          helperText="Enter your name"
        />
        <TextField
          variant="standard"
          label="password"
          size="large"
          color="error"
          required
          helperText="Enter your password"
          type="password"
          disabled
        />
        <TextField
          variant="standard"
          label="read only"
          size="large"
          color="warning"
          required
          helperText="Read only text field"
          type="password"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={3}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
