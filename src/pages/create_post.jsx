import React, { useState } from "react";
import CustomEditor from "../components/custom_editor/custom_editor.jsx";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Chip,
  Typography,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const tags = [
  "Volunteering",
  "Interest Group",
  "Local Organisation",
  "International",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [community, setCommunity] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [eventTime, setEventTime] = useState(null);
  const [numPeople, setNumPeople] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //localStorage.setItem("postnum", 0)
    if (localStorage.postnum) {
      localStorage.postnum = Number(localStorage.postnum) + 1;
    } else {
      localStorage.postnum = 1;
    }
    const newPost = {
      id: Date.now(),
      title,
      content,
      selectedTags,
      community,
      location,
      date: eventDate,
      time: eventTime,
      numPeople,
      createdAt: new Date().toLocaleDateString(),
    };
    posts.push(newPost);
    console.log(localStorage.getItem("postnum"));

    navigate(`/post/${newPost.id}`);
    // alert(
    //   `${newPost.title}\n${newPost.content}\n${newPost.selectedTags}\nLocation: ${newPost.location}\nDate: ${newPost.date}\nTime: ${newPost.time}\nNumber of People: ${newPost.numPeople}\nWe will send this to backend for actual`
    // );
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "background.gradient",
        borderRadius: 1,
        boxShadow: 3,
        "& > *": {
          mt: 2, // Adjust the margin-top as needed
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>

      <Typography variant="h6" gutterBottom>
        Title
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={handleTitleChange}
        helperText={`${title.length}/300`}
        margin="normal"
      />

      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        margin="normal"
      />

      <Typography variant="h6" gutterBottom>
        Event Date
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Event Date"
          value={eventDate}
          format="DD/MM/YYYY"
          onChange={(newValue) => setEventDate(newValue)}
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
      </LocalizationProvider>

      <Typography variant="h6" gutterBottom>
        Event Time
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Event Time"
          value={eventTime}
          onChange={(newValue) => setEventTime(newValue)}
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
      </LocalizationProvider>

      <Typography variant="h6" gutterBottom>
        Number of People
      </Typography>
      <TextField
        label="Number of People"
        variant="outlined"
        type="number"
        fullWidth
        value={numPeople}
        onChange={(e) => setNumPeople(e.target.value)}
        margin="normal"
      />

      <Typography variant="h6" gutterBottom>
        Community
      </Typography>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="community-label">Community</InputLabel>
        <Select
          labelId="community-label"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          label="Community"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"community1"}>Community 1</MenuItem>
          <MenuItem value={"community2"}>Community 2</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h6" gutterBottom>
        Tags
      </Typography>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="tags-label">Tags</InputLabel>
        <Select
          labelId="tags-label"
          multiple
          value={selectedTags}
          onChange={(e) => setSelectedTags(e.target.value)}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          label="Tags"
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h6" gutterBottom>
        Content
      </Typography>
      <CustomEditor value={content} onChange={handleContentChange} />

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="outlined" sx={{ mr: 2 }}>
          Save draft
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
