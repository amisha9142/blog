import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(45deg, #3f51b5, #9c27b0)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        padding: "0 30px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            color: "#fff",
            p:2,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
          }}
        >
          My Blog APP
        </Typography>
        {isLogin && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
              TabIndicatorProps={{
                style: { backgroundColor: "#fff" },
              }}
            >
              <Tab
                label="Blogs"
                LinkComponent={Link}
                to="/blogs"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": { color: "#ffeb3b" },
                }}
              />
              <Tab
                label="My Blogs"
                LinkComponent={Link}
                to="/my-blogs"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": { color: "#ffeb3b" },
                }}
              />
              <Tab
                label="Create Blog"
                LinkComponent={Link}
                to="/create-blog"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": { color: "#ffeb3b" },
                }}
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLogin ? (
            <>
              <Button
                sx={{
                  margin: 1,
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "#ffeb3b",
                    color: "#3f51b5",
                  },
                  borderRadius: "20px",
                }}
                variant="outlined"
                LinkComponent={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                sx={{
                  margin: 1,
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "#ffeb3b",
                    color: "#3f51b5",
                  },
                  borderRadius: "20px",
                }}
                variant="outlined"
                LinkComponent={Link}
                to="/register"
              >
                Register
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              sx={{
                margin: 1,
                color: "white",
                "&:hover": {
                  backgroundColor: "#ffeb3b",
                  color: "#3f51b5",
                },
                borderRadius: "20px",
              }}
              variant="outlined"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
