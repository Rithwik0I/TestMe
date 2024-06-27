import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import CustomButton from "../components/custom_button";
import { v4 as uuid } from "uuid";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DoneIcon from "@mui/icons-material/Done";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    // Mock fetch post and comments data
    // For actual, fetch data using id
    const fetchPost = async () => {
      const postData = {
        id: id,
        tag: `Post tag ${id}`,
        title: `Post Title ${id}`,
        content: `This is the content of post ${id}. We will fetch the content from back end using the id in url for actual work.
         \nufosfnsofnsfiodnsfiosfnsdiofndsfodsfnisofnsidfndsofnsfnosnfosnfosdnfodns`,
        upvotes: Math.floor(Math.random() * 100),
        createdAt: formatDate(new Date()),
      };
      setPost(postData);

      const commentsData = [
        {
          id: 1,
          author: "User1",
          content: "Great post!",
          createdAt: "2024-05-01",
        },
        {
          id: 2,
          author: "User2",
          content: "Thanks for sharing!",
          createdAt: "2024-05-02",
        },
      ];
      setComments(commentsData);
    };

    fetchPost();
  }, [id]);

  const handleEditClick = (comment) => {
    setEditingId(comment.id);
    setEditedContent(comment.content);
  };

  const handleSaveClick = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, content: editedContent }
          : comment
      )
    );
    setEditingId(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleDelete = (event) => {
    const commentIndex = Number(event.target.value);
    const remainingComments = comments.filter(
      (object) => object.id !== commentIndex
    );
    setComments(remainingComments);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const RegisterButton = () => {
    let icon = registered ? (
      <DoneIcon></DoneIcon>
    ) : (
      <AppRegistrationIcon></AppRegistrationIcon>
    );
    let text = registered ? (
      <span>Registered!</span>
    ) : (
      <span>Register for this Event</span>
    );
    let buttonColour = registered ? "success" : "primary";
    return (
      <Button
        variant="contained"
        onClick={() => setRegistered(!registered)}
        color={buttonColour}
      >
        {icon} {text}
      </Button>
    );
  };

  const CommentBox = () => {
    const [inputComment, setInputComment] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const newComment = {
        id: comments.length + 1,
        author: "Random User", // TODO: Replace with the actual user.
        content: inputComment,
        createdAt: formatDate(new Date()),
      };
      setComments((prevComments) => [...prevComments, newComment]); // TODO: Add into DB, not just update state.
    };

    return (
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type a comment, and hit enter to submit."
          value={inputComment}
          onChange={(event) => setInputComment(event.target.value)}
        />
      </Box>
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Posted on {post.createdAt}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.content}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <CustomButton
              displayType="post"
              buttonType="upvote"
              upvoteCount={post.upvotes}
              handleClick={() =>
                setPost({ ...post, upvotes: post.upvotes + 1 })
              }
            />
            <CustomButton displayType="post" buttonType="share" />
            <RegisterButton></RegisterButton>
          </Box>
        </CardContent>
      </Card>
      <Box>
        <Typography variant="h5" component="div" gutterBottom>
          Comments
        </Typography>
        <CommentBox />
        {comments.map((comment) => (
          <Card key={uuid()} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {comment.author}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {comment.createdAt}
              </Typography>
              {editingId === comment.id ? (
                <>
                  <TextField
                    fullWidth
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <Button onClick={() => handleSaveClick(comment.id)}>
                    Save
                  </Button>
                  <Button onClick={handleCancelClick}>Cancel</Button>
                </>
              ) : (
                <>
                  <Typography variant="body2">{comment.content}</Typography>
                  <Button onClick={() => handleEditClick(comment)}>Edit</Button>
                </>
              )}
              <Button value={comment.id} onClick={handleDelete}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Post;
