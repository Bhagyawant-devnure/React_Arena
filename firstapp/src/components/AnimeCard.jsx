import React from "react";
import anime from "../anime.json";

function Anime() {
  return (
    <div className="container mt-4">
      <h2>Anime Characters</h2>
      <div className="row">
        {anime.anime.map((character) => (
          <div key={character.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={character.image} style={{height:'350px'}} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.description}</p>
                <ul>
                  {character.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                  ))}
                </ul>
                <p>Status: {character.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anime;
