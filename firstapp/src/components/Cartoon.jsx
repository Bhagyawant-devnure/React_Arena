import React from "react";
import cartoon from "../cartoon.json";// Importing an icon from react-icons

function Cartoon() {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-5">Cartoon Characters</h2>
      <div className="row">
        {cartoon.cartoon.map((character) => (
          <div key={character.id} className="col-md-4 mb-4">
            <div className="card shadow-lg border-light rounded">
              <div
                className="card-img-top"
                style={{
                  padding : '5px',
                  backgroundImage: `url(${character.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                  borderTopLeftRadius: '0.25rem',
                  borderTopRightRadius: '0.25rem',
                }}
                alt={character.name}
              ></div>
              <div className="card-body" style={{ background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)' }}>
                <h5 className="card-title text-dark">{character.name}</h5>
                <p className="card-text text-muted">{character.description}</p>
                <ul className="list-unstyled">
                  {character.abilities.map((ability, index) => (
                    <li key={index} className="text-success">
                       {ability}
                    </li>
                  ))}
                </ul>
                <p className="text-info"><strong>Status:</strong> {character.status}</p>
                <div className="text-center mt-3">
                  <a href="#" className="btn btn-warning text-dark font-weight-bold">
            
                    Watch Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartoon;
