import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentPage, handlePageChange] = useState('About');

  return (
      <Router>
        <Header handlePageChange={handlePageChange} currentPage={currentPage}
        ></Header>
        <main className="main-content">
          <Routes>
            <Route path="/react-portfolio" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<ContactForm />} />
          </Routes>
          <div>
            <Footer/>
          </div>
        </main>
      </Router>
  );
}

export default App;