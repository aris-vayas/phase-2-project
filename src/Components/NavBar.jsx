import { Link } from "react-router-dom";
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
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div className="nav-bar">
      <AppBar color="primary">
        <Toolbar>
          <IconButton edge="start" size="large" color="error">
            <Link to="/">
              <PlayArrowIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Play
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="secondary">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>
            <Button
              variant="contained"
              color="secondary"
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
            <Button variant="contained" color="secondary">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
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
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                to="/music"
                style={{ textDecoration: "none", color: "black" }}
              >
                Music
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                to="/videos"
                style={{ textDecoration: "none", color: "black" }}
              >
                Videos
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
