import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import ToggleColorMode from "./toggle_color_mode";
import ProfileMenu from "./profilemenu";
import SearchForm from "../search_bar";

// const logoStyle = {
//   width: "140px",
//   height: "auto",
//   cursor: "pointer",
// };

function LargeNavBar({
  mode,
  toggleColorMode,
  onSearch,
  onSortChange,
  sortBy,
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,

        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 1)"
            : "rgba(0, 0, 0, 1)",

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

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <MenuItem
                // onClick={() => scrollToSection("faq")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  FAQ
                </Typography>
              </MenuItem> */}

              <MenuItem
                // onClick={() => scrollToSection("faq")}
                sx={{ py: "6px", px: "12px" }}
              >
                <SearchForm
                  onSearch={onSearch}
                  onSortChange={onSortChange}
                  sortBy={sortBy}
                  isLargeScreen={true}
                />
              </MenuItem>
              <MenuItem>
                <ProfileMenu />
                <Button color="inherit" component={Link} to="/create-post">
                  + Create Post
                </Button>
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component={Link}
                  to="/signin"
                >
                  Sign in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component={Link}
                  to="/signup"
                >
                  Sign up
                </Button>
                <ToggleColorMode
                  mode={mode}
                  toggleColorMode={toggleColorMode}
                />

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
                  <Drawer
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                  >
                    <Box
                      sx={{
                        minWidth: "60dvw",
                        p: 2,
                        backgroundColor: "background.paper",
                        flexGrow: 1,
                      }}
                    >
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

                      <Divider />
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
                    </Box>
                  </Drawer>
                </Box>
              </MenuItem>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

LargeNavBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default LargeNavBar;
