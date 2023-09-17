import "./App.css";
import { StudentList } from "./EnrollForm";
import { ListOfTeachers } from "./TeachersList";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div className="menu-icon">
              <MenuIcon />
            </div>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div id="instituite-name">Guvi Instuite of Tehnology</div>
            </Typography>
            <Button onClick={() => navigate("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => navigate("/students")} color="inherit">
              Students
            </Button>
            <Button onClick={() => navigate("/mentors")} color="inherit">
              Mentors
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/mentors" element={<ListOfTeachers />} />
      </Routes>
    </div>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1>Welcome to Guvi Instuite of Technology !!!</h1>
      <h3>For Student list update 👇</h3>
      <div className="btn-container">
        <Button
          onClick={() => navigate("/students")}
          color="error"
          variant="outlined"
        >
          Students
        </Button>
        <h3>For Mentor list update 👇</h3>
        <Button
          onClick={() => navigate("/mentors")}
          color="secondary"
          variant="outlined"
        >
          Mentors
        </Button>
      </div>
      <hr />
    </div>
  );
};
