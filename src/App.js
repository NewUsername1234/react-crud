import './App.css';
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Products } from "./components/Products.jsx";

function App() {
  return (
    <div id='app'>

      <header>
        <Navbar />
      </header>

      <Products headline='Products' />

      <Footer />

    </div>
  );
}

export default App;
