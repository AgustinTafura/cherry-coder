import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';
import SectionContainer from './components/Content';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>  
      </header>

      <main>

        <Carousel/>
        <SectionContainer/>
        <FooterContainer/>
      </main>

    </div>
  );
}

export default App;
