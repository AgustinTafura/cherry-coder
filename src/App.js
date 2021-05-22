import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';
import SectionContainer from './components/Content';
import CherryCarousel from './components/Carousel';
import ContactBubble from './components/ContactBubble';
import InstagramCarousel from './components/InstagramCarousel';
import SuscriptionEmail from './components/SuscriptionEmail';
import ShippingInfo from './components/ShippingInfo';
import ContentBody from './components/Content2';
import CardsProducts from './components/CardsPorducts';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <CherryCarousel />
        <ShippingInfo />
        {/* <ContentBody /> */}
        {/* <CardsProducts /> */}
        <SectionContainer />
        <SuscriptionEmail />
        <InstagramCarousel />
      </main>
      <FooterContainer />
      <ContactBubble />
    </div>
  );
}

export default App;
