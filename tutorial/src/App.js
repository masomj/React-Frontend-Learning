import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './Components/FunctionalGreeting';
import NavBar from './Components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar el1="Contact Us" el2="Our Services" el3="Blog"/>
      <FunctionalGreeting title="This is a parameter"/>

    </div>
  );
}

export default App;
