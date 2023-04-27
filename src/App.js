import './App.css';
import Header from './components/layouts/Header';
import Homepage from './pages/HomePage/index'
import Footer from './components/layouts/Footer';
import Contact from './pages/Contact/index';
import Skill from './pages/Skills/index'
function App() {
  return (
    <>
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
      </>
  );
}

export default App;
