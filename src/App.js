import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolbarNav from './components/ToolbarNav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Consulting from './pages/Consulting';
import Research from './pages/Research';
import Books from './pages/Books';
import Speaking from './pages/Speaking';
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import BlogSection from './pages/BlogSection';
import BlogPost from "./components/BlogPost";
import posts from "./data/posts";

function App() {
  return (
    <Router>
      <ToolbarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/research" element={<Research />} />
        <Route path="/books" element={<Books />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:slug" element={<BlogPost posts={posts} />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
