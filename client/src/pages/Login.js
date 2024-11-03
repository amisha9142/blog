import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
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
      const { data } = await axios.post("http://localhost:5000/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User logged in successfully");
        navigate("/");
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
          background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
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
          Login
        </Typography>

        <TextField
          placeholder="Email"
          value={inputs.email}
          name="email"
          margin="normal"
          type="email"
          required
          fullWidth
          variant="outlined"
          onChange={handleChange}
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
          name="password"
          margin="normal"
          type="password"
          required
          fullWidth
          variant="outlined"
          onChange={handleChange}
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
          onClick={() => navigate("/register")}
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
          Not a user? Please Register
        </Button>
      </Box>
    </form>
  );
};

export default Login;
