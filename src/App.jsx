import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllCharacters = async () => {
      setIsLoading(true);
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
      const data = await response.json();
      setCharacters(data.items);
      setIsLoading(false);
    };

    getAllCharacters();
  }, [page]);

  return (
    <section>
      <h1>
        Dragonball API
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              {character.name}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setPage((page) => page - 1)}>
        Previous page
      </button>
      <button onClick={() => setPage((page) => page + 1)}>
        Next page
      </button>
    </section>
  )
}

export default App
