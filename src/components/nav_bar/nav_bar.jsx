import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ToggleColorMode from "./toggle_color_mode";
import ProfileMenu from "./profilemenu";
import SearchForm from "../search_bar";
import LargeNavBar from "./large_nav_bar";

function NavBar({ mode, toggleColorMode, onSearch, onSortChange, sortBy }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const shouldDisplay =
    location.pathname === "/home" || location.pathname === "/communities";
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return shouldDisplay ? (
    isLargeScreen ? (
      <LargeNavBar
        onSearch={onSearch}
        onSortChange={onSortChange}
        sortBy={sortBy}
        toggleColorMode={toggleColorMode}
        mode={mode}
      />
    ) : (
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 1)"
              : "rgba(0, 0, 0, 0.6)",
          boxShadow:
            theme.palette.mode === "light"
              ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
        }}
      >
        <Container
          width="100%"
          maxWidth="false"
          maxHeight="false"
          sx={{
            border: "1px solid",
            borderColor: "divider",
            height: "100%",
          }}
        >
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "50px",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "5px",
              }}
            >
              Clot
            {/* </Typography> */}

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              
              {/* <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Typography 
                variant="body2" 
                color="text.primary" 
                component={Link} to="/communities" 
                style={{ textDecoration: 'none' }}>
                  Communities
                </Typography>
              </MenuItem> */}
              <MenuItem
                // onClick={() => scrollToSection("faq")}
                sx={{ py: "6px", px: "12px" }}
              >

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: "25px",
                }}
              >
                <SearchForm />
                </Box>
              </MenuItem>
              <MenuItem >
                <ProfileMenu />
                <Button
                  color="primary"
                  variant="text"
                  size="large"
                  component={Link}
                  to="/signin"
                  
                >
                  Login in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/signup"
                >
                  Sign up
                </Button>
                <ToggleColorMode
                  mode={mode}
                  toggleColorMode={toggleColorMode}
                />
              </MenuItem>
                {/* Drawer button for small screens */}
                <Box
                  sx={{
                    display: { sm: "", md: "none" },
                    ml: 1,
                  }}
                >
                  <Button
                    variant="text"
                    color="primary"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ minWidth: "30px", p: "4px" }}
                  >
                    <MenuIcon />
                  </Button>
                  <Drawer
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                  >
                    {/* Drawer content */}
                    <Box sx={{ p: 2 }}>
                      <MenuItem>
                        <ProfileMenu />
                      </MenuItem>
                      {/* <Button
                        color="inherit"
                        component={Link}
                        to="/create-post"
                        fullWidth
                      >
                        + Create Post
                      </Button> */}
                      <Button
                        color="primary"
                        variant="text"
                        size="small"
                        component={Link}
                        to="/signin"
                        fullWidth
                      >
                        Sign in
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        component={Link}
                        to="/signup"
                        fullWidth
                      >
                        Sign up
                      </Button>
                    </Box>
                  </Drawer>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
  ) : (
    <Box>
      <AppBar
        position={isHomePage ? "fixed" : "static"}
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 5,
              }}
            >
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Clot
              </Typography>
              {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  // onClick={() => runTo("communities")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Communities
                  </Typography>
                </MenuItem>
              </Box> */}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <ProfileMenu />
              {/* <Button color="inherit" component={Link} to="/create-post">
                + Create Post
              </Button> */}
              <Button
                color="primary"
                variant="text"
                size="small"
                component={Link}
                to="/signin"
                href="/material-ui/getting-started/templates/sign-in/"
                target=" "
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component={Link}
                to="/signup"
                href="/material-ui/getting-started/templates/sign-up/"
                target=" "
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
};

export default NavBar;
