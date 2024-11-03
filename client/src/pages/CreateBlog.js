import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "500px", // Increased maxWidth for wider form
        margin: "50px auto",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fefefe",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        "@media (max-width: 768px)": {
          maxWidth: "90%", // Adjusts width on smaller screens
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          mb: 2,
          fontFamily: "Arial, sans-serif",
        }}
      >
        Create a New Blog
      </Typography>

      <InputLabel
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Title
      </InputLabel>
      <TextField
        name="title"
        value={inputs.title}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        size="small"
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />

      <InputLabel
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Description
      </InputLabel>
      <TextField
        name="description"
        value={inputs.description}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        size="small"
        multiline
        rows={3}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />

      <InputLabel
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Image URL
      </InputLabel>
      <TextField
        name="image"
        value={inputs.image}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        size="small"
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          py: 1,
          mb:2,
          fontWeight: "bold",
          borderRadius: "8px",
          background: "linear-gradient(45deg, #3f51b5, #9c27b0)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(45deg, #9c27b0, #3f51b5)",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CreateBlog;
