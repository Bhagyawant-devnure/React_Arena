import React, { useState } from "react";
import AnimeCard from './Components/AnimeCard'
import Cartoon from "./Components/Cartoon";

function App() {
  const [showAnime, setShowAnime] = useState(false);
  const [showCartoon, setShowCartoon] = useState(false);

  const handleAnimeClick = () => {
    setShowAnime(true);
    setShowCartoon(false);
  };

  const handleCartoonClick = () => {
    setShowCartoon(true);
    setShowAnime(false);
  };

  return (
    <div className="App">
      <div className="container mt-4 text-center">
        <h1>Child Fantacy</h1>
        <div className="btn-group" role="group" aria-label="Character Type">
          <button
            className="btn btn-primary m-2"
            onClick={handleAnimeClick}
          >
            Anime
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={handleCartoonClick}
          >
            Cartoon
          </button>
        </div>
      </div>

      {/* Conditionally render Anime or Cartoon based on the state */}
      {showAnime && <AnimeCard />}
      {showCartoon && <Cartoon />}
    </div>
  );
}

export default App;
