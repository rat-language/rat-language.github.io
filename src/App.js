import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // Adjust the path as necessary
import HomePage from './pages/HomePage/HomePage'; // Adjust the path according to your project structure
import DocsPage from './pages/DocsPage/DocsPage';
import CompilationPage from './pages/CompilationPage/CompilationPage';


function App() {
  return (
    <Router>
      <div style={{ overflowX: 'hidden' }}>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compile" element={<CompilationPage />} />
            <Route path="/docs" element={<DocsPage />} />
          {/* Future routes will go here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


