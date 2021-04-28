import logo from './logo.svg';
import './App.css';
import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';

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

      <body>
        ACA VIENE EL BODY?
      </body>

      <FooterContainer>

      </FooterContainer>

    </div>
  );
}

export default App;
