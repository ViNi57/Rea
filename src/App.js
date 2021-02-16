import "./App.css";
import "./css/LineIcons.css";
import "./css/main.css";
import "./css/responsive.css";

import { Navbar, Mai, About, Services, Form, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <header id="home" className="vin-area">
        <div className="overlay">
          <span></span>
          <span></span>
        </div>
        <Navbar />
        <Mai />
      </header>
      <About />
      <Services />
      <Form />
      <Footer />
      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>
    </div>
  );
}

export default App;
