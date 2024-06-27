import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";

// Define your posts with subreddit information
const posts = [
  {
    id: 1,
    title: "Cat spotters wanted! East side.",
    content:
      "We are currently looking for cat spotters to spot cats in the east",
    subreddit: {
      name: "Sg cat spotters",
      icon: "https://i.imgur.com/pATBFLr.jpeg",
    },
  },
  {
    id: 2,
    title: "New cat spotted!",
    content: "I spotted a new cat last night. I was so happy!",
    subreddit: {
      name: "Sg cat spotters",
      icon: "https://i.imgur.com/pATBFLr.jpeg",
    },
  },
  {
    id: 3,
    title: "Why are there so many edgar players?",
    content:
      "Everytime i join a game, everyone is using edgar(especially in solo). It is such a no skill brawler. All you do is camp in bush, charge ult then jump. If you are not using a shotgun brawler you are pretty much screwed.  ",
    subreddit: {
      name: "Brawl Stars SG",
      icon: "https://i.imgur.com/4PfDuW2.jpeg",
    },
  },
  {
    id: 4,
    title: "Coaches wanted! East side.",
    content:
      "We are currently looking for volunteer coaches to coaches to coach newbies in the east  ",
    subreddit: {
      name: "Brawl Stars SG",
      icon: "https://i.imgur.com/4PfDuW2.jpeg",
    },
  },
];

const Communities = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Communities
      </Typography>
      {posts.map((post) => (
        <Card key={post.id} variant="outlined" style={{ marginBottom: "1rem" }}>
          <CardHeader
            avatar={
              <Avatar alt={post.subreddit.name} src={post.subreddit.icon} />
            } // Render the subreddit icon
            title={post.title}
            subheader={post.subreddit.name} // Render the subreddit name
          />
          <CardContent>
            <Typography>{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Communities;
