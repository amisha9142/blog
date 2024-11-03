import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
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
      const { data } = await axios.post("http://localhost:5000/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        toast.success("User Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        maxWidth={450}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={4}
        borderRadius={5}
        boxShadow="0px 10px 30px rgba(0, 0, 0, 0.2)"
        sx={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "#3f51b5",
            fontFamily: "'Poppins', sans-serif",
            marginBottom: 2,
          }}
          textAlign="center"
        >
          Register
        </Typography>
        <TextField
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
          name="name"
          margin="normal"
          type="text"
          required
          fullWidth
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3f51b5",
              },
              "&:hover fieldset": {
                borderColor: "#ff9800",
              },
            },
          }}
        />
        <TextField
          placeholder="Email"
          value={inputs.email}
          onChange={handleChange}
          name="email"
          margin="normal"
          type="email"
          required
          fullWidth
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3f51b5",
              },
              "&:hover fieldset": {
                borderColor: "#ff9800",
              },
            },
          }}
        />
        <TextField
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
          name="password"
          margin="normal"
          type="password"
          required
          fullWidth
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3f51b5",
              },
              "&:hover fieldset": {
                borderColor: "#ff9800",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 3,
            marginTop: 2,
            padding: "10px 0",
            background: "linear-gradient(45deg, #3f51b5, #9c27b0)",
            "&:hover": {
              background: "linear-gradient(45deg, #9c27b0, #3f51b5)",
            },
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => navigate("/login")}
          fullWidth
          sx={{
            borderRadius: 3,
            marginTop: 2,
            padding: "10px 0",
            color: "#3f51b5",
            "&:hover": {
              backgroundColor: "#ffeb3b",
              color: "#3f51b5",
            },
          }}
        >
          Already Registered? Please Login
        </Button>
      </Box>
    </form>
  );
};

export default Register;
