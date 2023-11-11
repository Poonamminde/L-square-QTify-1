import "./App.css";
import Navigation from "./Component/Navigation/Navigation";
import Hero from "./Component/Hero/hero";
import Card from "./Component/Card";
//import fetchData from "./Component/api/api.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <div style={{ display: "flex" }}>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
