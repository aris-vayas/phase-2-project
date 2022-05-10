import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton edge="start" size="large" color="error">
          <PlayArrowIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Play
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" color="inherit">
            Home
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            id="view-content-button"
            aria-controls={open ? "content-dropdown" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            Content
          </Button>
          <Button variant="outlined" color="inherit">
            About
          </Button>
        </Stack>
        <Menu
          id="content-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{ "aria-labelledby": "view-content-button" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>Music</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Videos</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
