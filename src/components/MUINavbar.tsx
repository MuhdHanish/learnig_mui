import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";

export const MUINavbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SailingIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          Midjourney
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Features</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "true" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon/>}
          >
            Resources
          </Button>
          <Button color="inherit">Home</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{vertical:"bottom", horizontal:"right"}}
          transformOrigin={{vertical:"top", horizontal:"right"}}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
