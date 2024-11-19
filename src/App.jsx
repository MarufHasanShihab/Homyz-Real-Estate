import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <div>
        <div className="white__gradient"/>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
