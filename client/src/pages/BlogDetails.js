import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  // Fetch blog details
  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data.blog);
        setInputs({
          title: data.blog.title,
          description: data.blog.description,
          image: data.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`http://localhost:5000/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Updated");
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
        width: "90%",
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="#333"
        sx={{ mb: 2, fontFamily: "Arial, sans-serif" }}
      >
        Update Blog Post
      </Typography>

      <InputLabel
        sx={{ fontSize: "16px", fontWeight: "bold", color: "#555", fontFamily: "Arial, sans-serif" }}
      >
        Title
      </InputLabel>
      <TextField
        name="title"
        value={inputs.title}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        }}
      />

      <InputLabel
        sx={{ fontSize: "16px", fontWeight: "bold", color: "#555", fontFamily: "Arial, sans-serif" }}
      >
        Description
      </InputLabel>
      <TextField
        name="description"
        value={inputs.description}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        required
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        }}
      />

      <InputLabel
        sx={{ fontSize: "16px", fontWeight: "bold", color: "#555", fontFamily: "Arial, sans-serif" }}
      >
        Image URL
      </InputLabel>
      <TextField
        name="image"
        value={inputs.image}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          mt: 3,
          py: 1,
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#3f51b5",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#5c6bc0",
          },
        }}
      >
        Update Blog
      </Button>
    </Box>
  );
};

export default BlogDetails;
