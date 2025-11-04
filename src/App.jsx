import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Capabilities />
      <Footer />
    </div>
  );
}

export default App;
