import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocLinks from "./components/SocLinks";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import PortFol from "./components/portFol";





function App() {
return (
  <div>
    <NavBar /> 
    <Home />
    <About /> 
    <PortFol/>
    <Experience />
    <Contacts />
    <SocLinks/>
  </div>
)
}

export default App;
