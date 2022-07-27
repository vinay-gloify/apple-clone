import './App.css';
import Features from './components/Features';
import Hero from './components/Hero';
import Iphone from './components/Iphone';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Retail from './components/Retail';
import Specification from './components/Specification';

function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Hero />
      <Features />
      <Iphone />
      <Specification />
      <Retail />
    </>
  );
}

export default App;
