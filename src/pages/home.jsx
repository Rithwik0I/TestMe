import React, { useState } from "react";
import DisplayCard from "../components/display_card";
import SearchBar from "../components/search_bar";
import { Container, Grid, Divider } from "@mui/material";
import Hero from "../components/hero";

const Home = ({ filteredAndSortedPosts }) => {
  return (
    <>
      <Container sx={{ pt: 10 }}>
        <Grid container spacing={2}>
          {filteredAndSortedPosts.map((postData) => (
            <Grid key={postData.id} item xs={6} md={4}>
              <DisplayCard postData={postData} />
              
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
