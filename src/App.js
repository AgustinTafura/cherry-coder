import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content';

function App() {
  return (
    <div className="App">
      
      <Navbar/>  

      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sitio en construcción.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/cherryalmohadillas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactanos
        </a>
      </header>


      <ContentContainer/>

      <FooterContainer/>

    </div>
  );
}

export default App;
