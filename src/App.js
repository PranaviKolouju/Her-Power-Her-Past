import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Blogs from './Blogs/Blogs';
import Post1 from './Posts/Post1/Post1';

function App() {
  return (
    <Router basename="/Her-Power-Her-Past">  
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />         {/* Home Route */}
          <Route path="/blogs" element={<Blogs />} />   {/* Blogs Route */}
          <Route path="/post1" element={<Post1 />} />  {/* Specific Post Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;