import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ onSearch, onSortChange, sortBy, isLargeScreen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, fromDate, toDate, sortBy });
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 3,
        p: 5,
        // borderBottom: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#fff",
          // padding: "16px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <TextField
          type="search"
          label="Search for events"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{
            width: "100%", // Make the TextField fill the available space
            maxWidth: "800px", // Set a maximum width
          }}
        />
        {isLargeScreen ? (
          <>
            <TextField
              type="date"
              label="From"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              sx={{ height: "100%" }}
            />
            <TextField
              type="date"
              label="To"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              sx={{ height: "100%" }}
            />{" "}
          </>
        ) : (
          <></>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            height: "56px", // Match the height of TextField input
            // padding: "0 16px", // Adjust padding if necessary
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box> Search</Box>
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;
