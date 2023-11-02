import { Container } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Meet from "./components/Meet";
import Selling from "./components/Selling";
import Direct from "./components/Direct";
import Chating from "./components/Chating";
import Footer from "./components/Footer";
import Blessed from "./components/Blessed";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Meet />
      <Selling />
      <Direct />
      <Blessed />
      <Chating />
      <Footer />
    </>
  );
}

export default App;
