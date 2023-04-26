import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material'
import Header from './components/layouts/Header';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage/index'

import Footer from './components/layouts/Footer';
import Contact from './pages/Contact/index';
import Skill from './pages/Skills/index'
function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Homepage />
        <Skill />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
