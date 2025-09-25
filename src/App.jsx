import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getAllCharacters = async () => {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
      setCharacters(data.items);
    };

    getAllCharacters();
  }, []);

  return (
    <section>
      <h1>
        Dragonball API
      </h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
