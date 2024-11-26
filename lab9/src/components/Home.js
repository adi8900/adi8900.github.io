import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4">O mnie</h1>
      <p className="lead">
    Jestem Adrian, interesuję się programowaniem i technologiami.
      </p>
      <div className="mt-4">
        <Link to="/lab7" className="btn btn-info me-2">
          Zobacz Lab 7
        </Link>
        <Link to="/lab8" className="btn btn-warning me-2">
          Zobacz Lab 8
        </Link>
        <Link to="/interests" className="btn btn-primary me-2">
          Moje Zainteresowania
        </Link>
        <Link to="/favorite" className="btn btn-secondary me-2">
          Ulubiona Gra
        </Link>
        <Link to="/contact" className="btn btn-success">
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default Home;
