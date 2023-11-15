import "./App.css";
import Navigation from "./Component/Navigation/Navigation";
import Hero from "./Component/Hero/hero";
import Section from "./Component/Section";
import { getNewAlbum, getTopAlbum } from "./Component/API";
import { useState, useEffect } from "react";

function App() {
  let [topData, setTopData] = useState([]);
  let [newData, setNewData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data1 = await getTopAlbum();
      setTopData(data1);
      let data2 = await getNewAlbum();
      setNewData(data2);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Section label="Top Album" data={topData} />
      <Section label="New Album" data={newData} />
    </div>
  );
}

export default App;
