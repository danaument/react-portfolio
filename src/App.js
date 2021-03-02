import './App.css';
import Welcome from './components/Welcome.js';
import Canvas from './components/Canvas.js';
import Navbar from './components/Navbar.js';
import WorkButton from './components/WorkButton.js';

function App() {
  const name = "Dan Aument";
  return (
    <div className="App">
      <section id="home" className="">
        <Canvas />
        <div>
          <Welcome name={name}/>
          <WorkButton />
          <Navbar />
        </div>
      </section>
      
    </div>
  );
}

export default App;
