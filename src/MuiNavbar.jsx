import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
const MuiNavbar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const handleClick = (e) => {
    setAnchorElement(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="icon">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="text" color="inherit">
            Home
          </Button>
          <Button variant="text" color="inherit">
            Music
          </Button>
          <Button
            variant="text"
            color="inherit"
            id="resource-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button variant="text" color="inherit">
            Video
          </Button>
          <Button variant="text" color="inherit">
            About
          </Button>
        </Stack>

        <Menu
          id="resourse-menu"
          anchorEl={anchorElement}
          open={open}
          MenuListProps={{ "aria-labelledby": "resource-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
