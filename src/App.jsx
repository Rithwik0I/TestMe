import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import CreatePost from "./pages/create_post";
import NavBar from "./components/nav_bar/nav_bar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./pages/profile";
import SignUp from "./pages/signup";
import Signin from "./pages/signin";
import SideBarLeft from "./components/sidebar";
import LandingPage from "./pages/landing";
import Communities from "./pages/communities/communities";
import { mockEvents } from "./mock_data";

const customThemeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ED9455", // Warm primary color
    },
    secondary: {
      main: "#FFEC9E", // Light secondary color
    },
    background: {
      paper: "#FFFFFF", // White background for paper elements
      warm: "#FFFBDA", // Warm background color
      gradient: "linear-gradient(to right, #FFFBDA, #FFEC9E, #FFBB70, #ED9455)", // Custom gradient background
    },
    text: {
      primary: "#333333", // Dark text color
      secondary: "#757575", // Light secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font family
  },
  shape: {
    borderRadius: 8, // Rounded corners for elements
  },
  spacing: 8, // Default spacing unit
});

const customThemeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: customThemeLight.palette.secondary.main, // Warm primary color
    },
    secondary: {
      main: customThemeLight.palette.primary.main, // Light secondary color
    },
    background: {
      paper: customThemeLight.palette.text.primary, // White background for paper elements
      warm: customThemeLight.palette.text.secondary, // Warm background color
      gradient: "linear-gradient(to right, #FFFBDA, #FFEC9E, #FFBB70, #ED9455)", // Custom gradient background
    },
    text: {
      primary: customThemeLight.palette.background.paper, // Dark text color
      secondary: customThemeLight.palette.background.warm, // Light secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font family
  },
  shape: {
    borderRadius: 8, // Rounded corners for elements
  },
  spacing: 8, // Default spacing unit
});

function App() {
  const [mode, setMode] = useState("light"); // Theme mode: light or dark

  // Function to toggle between light and dark mode
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    fromDate: "",
    toDate: "",
  });

  const [sortBy, setSortBy] = useState("recent");

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const filteredAndSortedPosts = mockEvents
    .filter((post) => {
      const matchesSearchTerm =
        post.title
          .toLowerCase()
          .includes(searchParams.searchTerm.toLowerCase()) ||
        post.description
          .toLowerCase()
          .includes(searchParams.searchTerm.toLowerCase());

      const matchesFromDate =
        !searchParams.fromDate ||
        new Date(post.createdOn) >= new Date(searchParams.fromDate);
      const matchesToDate =
        !searchParams.toDate ||
        new Date(post.createdOn) <= new Date(searchParams.toDate);

      return matchesSearchTerm && matchesFromDate && matchesToDate;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "upvotes":
          return b.upvotes - a.upvotes;
        case "recent":
        default:
          return new Date(b.createdOn) - new Date(a.createdOn);
      }
    });

  return (
    <ThemeProvider theme={mode === "dark" ? customThemeLight : customThemeDark}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <SideBarLeft>
            <NavBar
              toggleColorMode={toggleColorMode}
              mode={mode}
              onSearch={handleSearch}
              onSortChange={handleSortChange}
              sortBy={sortBy}
            />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/home"
                element={
                  <Home filteredAndSortedPosts={filteredAndSortedPosts} />
                }
              />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/hostform" element={<CreatePost />} />
            </Routes>
            <footer className="py-5 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">
                  Copyright &copy; Your Website 2023
                </p>
              </div>
            </footer>
          </SideBarLeft>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
