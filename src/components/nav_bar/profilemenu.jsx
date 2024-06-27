// ProfileMenu.js
import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} size="large">
        <Avatar alt="Profile Picture" src="/path-to-your-profile-picture.jpg" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/settings">
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/logout">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
