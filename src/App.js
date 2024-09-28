import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Blogs from './Blogs/Blogs'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />         {/* Home Route */}
          <Route path="/blogs" element={<Blogs />} />   {/* Blogs Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

