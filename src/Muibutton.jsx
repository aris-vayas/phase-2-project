import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
const Muibutton = () => {
  const [format, setFormat] = useState("");
  console.log(format);
  const handleFormatChange = (event, formats) => {
    setFormat(formats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="#">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" size="small" color="secondary">
          Small
        </Button>
        <Button variant="contained" size="medium" color="info">
          Medium
        </Button>
        <Button variant="contained" size="large" color="success">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => {
            alert("yooo");
          }}
        >
          Send
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          disableElevation
        >
          Send
        </Button>
        <IconButton aria-label="send" size="large" color="primary">
          <SendIcon />
        </IconButton>
        <Button variant="contained"></Button>
      </Stack>
      <Stack direction="row-reverse">
        <ButtonGroup
          aria-label="button group"
          variant="contained"
          disableRipple
          disableElevation
          orientation="vertical"
          size="small"
          color="warning"
        >
          <Button
            onClick={() => {
              alert("Left");
            }}
          >
            Left
          </Button>
          <Button
            onClick={() => {
              alert("Center");
            }}
          >
            Center
          </Button>
          <Button
            onClick={() => {
              alert("Right");
            }}
          >
            Right
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="iconTextFormatting"
          value={format}
          onChange={handleFormatChange}
          size="large"
          color="warning"
          // orientation="vertical"
          exclusive
        >
          <ToggleButton disableRipple aria-label="bold" value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton aria-label="italic" value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton aria-label="underlined" value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Muibutton;
