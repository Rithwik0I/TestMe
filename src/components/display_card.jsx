import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Divider,
  CardHeader,
  Chip,
  Button,
} from "@mui/material";
import CustomButton from "./custom_button";


const DisplayCard = ({ postData }) => {
  const navigate = useNavigate();
  const [upvotes, setUpvotes] = useState(postData.upvotes);

  const handleUpvote = (e) => {
    e.stopPropagation();
    setUpvotes(upvotes + 1);
  };

  const handleShare = (e) => {
    e.stopPropagation();
  };

  const handleCardClick = () => {
    navigate(`/post/${postData.id}`);
  };

  return (
    <Card
      variant="outlined"
      onClick={handleCardClick}
      sx={{ maxWidth: 345, boxShadow: "lg", cursor: "pointer" }}
    >
      <CardHeader title={postData.title} />

      <CardMedia
        component="img"
        height="194"
        image="/volunteer.png"
        // image={postData.image}
        alt="Paella dish"
      />
      <CardContent>
      <Button
        loading={false}
        // onClick={function(){}}
        size="sm"
        variant="soft"
      >
           <Typography variant="caption text" component="div" fontWeight="bold">
            Tag {postData.tag}
          </Typography>
      </Button>
      {/* <Fab variant="extended">
        <Typography variant="caption text" component="div" fontWeight="bold">
            Tag {postData.tag}
          </Typography>
      </Fab> */}
        <Typography variant="body1" color="text.secondary">
          {postData.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created On: {postData.createdOn}
        </Typography>
      </CardContent>
      <Divider inset="none" />
      <CardActions>
        <CustomButton
          displayType="card"
          buttonType="upvote"
          upvoteCount={upvotes}
          handleClick={handleUpvote}
        />
        <CustomButton
          displayType="card"
          buttonType="share"
          handleClick={handleShare}
        />
        <Chip 
          label={`${Math.floor(Math.random() * 100)} Slots Left!`}
          variant="outlined">
        </Chip>
      </CardActions>
    </Card>
  );
};

DisplayCard.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
  }).isRequired,
};

export default DisplayCard;
