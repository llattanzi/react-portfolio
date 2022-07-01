import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case "About":
        return <About></About>
      case "Portfolio":
        return <Project></Project>
      case "Resume":
        return <Resume></Resume>
      case "Contact":
        return <ContactForm></ContactForm>
    }
  };

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      <main class="main-content">
        <div>
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;