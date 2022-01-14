import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import CatItem from "./components/CatItem";
import CatPost from "./components/CatPost";
import cats from "./data/cats";

function App() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onCatOpenClick(theCat) {
    setSelectedCat(theCat);
  }

  function onCatCloseClick() {
    setSelectedCat(null);
  }

  // const filteredCats = cats.filter((cat) => {
  //   return cat.title.includes(searchText);
  // });
  const catElements = cats
    .filter((cat) => {
      return cat.title.includes(searchText);
    })
    .map((cat, index) => {
      return <CatItem key={index} cat={cat} onCatClick={onCatOpenClick} />;
    });

  let catPost = null;
  if (!!selectedCat) {
    catPost = <CatPost cat={selectedCat} onBgClick={onCatCloseClick} />;
  }

  return (
    <div className="App">
      <AppHeader />

      <section className="app-section">
        <div className="app-containner">
          <AppSearch value={searchText} onValueChange={setSearchText} />

          <div className="app-grid">{catElements}</div>
        </div>
      </section>
      
      {catPost}
    </div>
  );
}

export default App;
