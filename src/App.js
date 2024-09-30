import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import Dashboard from "./component/Dashboard/Dashboard";
import SignIn from "./component/SignIn/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
