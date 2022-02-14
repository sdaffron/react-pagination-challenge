import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Use this API to get data for the table
  // Add a value to the offset parameter in the URL to control paging of data. Examples below
  //  .../pokemon?limit=10&offset=0 gets the first 10 rows in the collection
  //  .../pokemon?limit=10&offset=20 gets 10 rows of data AFTER SKIPPING the first 20
  const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";

  const [pokemon, setPokemon] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Get data from the Pokemon API here and store it accordingly
  };

  return (
    <div className="App">
      <header>Pokemon List React Paging Challenge</header>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>{/* Populate the rows of pokemon data here */}</tbody>
        </table>
        <section className="pagination">
          {/* Hook up click handlers for buttons here */}
          <button className="first-page-btn">first</button>
          <button className="previous-page-btn">previous</button>
          <button className="next-page-button">next</button>
          <button className="last-page-button">last</button>
        </section>
      </div>
    </div>
  );
}

export default App;
