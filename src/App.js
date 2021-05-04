import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import FooterContainer from './components/Footer';
import Navbar from './components/Navbar';
import SectionContainer from './components/Content';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>  
      </header>

      <main>

        {/* <SectionContainer/> */}
      </main>
      <FooterContainer/>

    </div>
  );
}

export default App;
