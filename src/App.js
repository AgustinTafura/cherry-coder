import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content';
import CherryCarousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <CherryCarousel />
        <ContentContainer />
        <FooterContainer />
      </main>
    </div>
  );
}

export default App;
