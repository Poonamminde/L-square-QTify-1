import "./App.css";
import Navigation from "./Component/Navigation/Navigation";
import Hero from "./Component/Hero/hero";
import Section from "./Component/Section";
import {
  getNewAlbum,
  getTopAlbum,
  getSongsAlbum,
  getGenres,
} from "./Component/API";
import { useState, useEffect } from "react";
import FilteredSection from "./Component/FilteredSection";
import FAQs from "./Component/FAQs";

function App() {
  let [topData, setTopData] = useState([]);
  let [newData, setNewData] = useState([]);
  let [songsData, setSongsData] = useState([]);
  let [genresData, setGenresData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data1 = await getTopAlbum();
      setTopData(data1);
      let data2 = await getNewAlbum();
      setNewData(data2);
      let data3 = await getSongsAlbum();
      setSongsData(data3);
      let data4 = await getGenres();
      setGenresData(data4.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Section label="Top Album" data={topData} />
      <Section label="New Album" data={newData} />
      <FilteredSection genres={genresData} data={songsData} />
      <FAQs />
    </div>
  );
}

export default App;
