import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';
import SectionContainer from './components/Content';
import CherryCarousel from './components/Carousel';
import ContactBubble from './components/ContactBubble';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <CherryCarousel />
        <SectionContainer />
      </main>
      <FooterContainer />
      <ContactBubble />
    </div>
  );
}

export default App;
