import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import {
  IconButton,
  ListItemAvatar,
  Avatar,
  Checkbox,
  ListItemSecondaryAction,
} from "@mui/material";
import { mockUser } from "../mock_data";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;
const shouldDisplay =
  location.pathname === "/home" || location.pathname === "/communities";

export default function SideBarLeft({ children }) {
  const [showFriends, setShowFriends] = useState(true);
  const navigate = useNavigate();

  const handleToggle = (show) => () => {
    setShowFriends(show);
  };

  const directToCommunities = function () {
    navigate("/communities");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: shouldDisplay ? "block" : "none",
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ marginTop: "10px", marginBottom: "10px" }}></Toolbar>
        <Toolbar>
          <Button onClick={handleToggle(true)}>Friends</Button>
          <Button onClick={handleToggle(false)}>Communities</Button>
        </Toolbar>
        <Divider />
        <List>
          {showFriends
            ? mockUser.friends.map((friend, index) => (
                <ListItem key={friend.id}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar alt={friend.name} src={friend.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={friend.name}
                      secondary={friend.recentActivity}
                      sx={{ ml: 2 }}
                    />
                    <ListItemSecondaryAction>
                      <Checkbox edge="end" />
                    </ListItemSecondaryAction>
                  </Box>
                </ListItem>
              ))
            : mockUser.communities.map((community) => (
                <ListItem key={community.id} onClick={directToCommunities}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <ListItemText
                      primary={community.name}
                      secondary={community.description}
                      sx={{ ml: 2 }}
                    />
                  </Box>
                </ListItem>
              ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {children}
        <Toolbar />
      </Box>
    </Box>
  );
}
