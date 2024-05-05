import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
