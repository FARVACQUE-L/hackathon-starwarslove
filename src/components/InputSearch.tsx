import { useState, useEffect } from "react";
import "./InputSearch.css";
import type Character from "../types/Character";

interface InputSearchProps {
  setStarWarsCharacter: (char: Character) => void;
}

function changeChar(
	setStarWarsCharacter: (char: Character) => void,
	starWarsCharacter: Character) 
{
	setStarWarsCharacter(starWarsCharacter)
}

function InputSearch({setStarWarsCharacter}: InputSearchProps) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setFilteredCharacters(data); // sync initial
      });
  }, []);

  //ul
  const [isVisible, setIsVisible] = useState(false);

  const listStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: "0%",
    zIndex: 100,
    display: isVisible ? "flex" : "none",
  };
  
  //input
    const [inputValue, setInputValue] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  function filterCharacters(value: string) {
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  }
//input 
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    filterCharacters(e.target.value);
    setIsVisible(true);
  }

  //li 

 // const [starWarsCharacter, setStarWarsCharacter] = useState("");
  
  function handleSelect(name: string) {
    setInputValue(name);
		setStarWarsCharacter(character);
    setIsVisible(false); // ferme la liste après sélection
  }

  return (        //htmlFor à la place de for, parce qu'on est en JSX et for est un terme JS.... comme class --> className
    <div className="input-container">
      <label htmlFor="character" className="character-search">
        Selectionnez votre personnage :{" "}
      </label>
      <input
        id="character" /* corrigé : doit matcher le htmlFor */
        name="character"
        className="character-search"
        placeholder="Entre un nom"
        value={inputValue}
        onChange={(e) => onChange(e)}
        onBlur={() => setIsVisible(false)}
      />
      <ul style={listStyle} className="characters-list">
        {filteredCharacters.map((character) => (
          <li
            key={character.name}
            className="selected-character"
            tabIndex={0} /* nécessaire pour que onKeyDown fonctionne */
            onMouseDown={() => {handleSelect(character.name); changeChar(setStarWarsCharacter, character)}}
            onKeyDown={(e) => e.key === "Enter" && handleSelect(character.name)}
			/*onClick={() => changeChar(setStarWarsCharacter, character)}*/
          >
            {character.name}
          </li>                    //onMouseDown pour que ça soit joué à l'appui du bouton-souris, avant onBlur qui masque la liste
                    //onKeyDown : idem pour l'accessibilité
                    //onBlur: dès qu'on clique ailleurs

        ))}
      </ul>
    </div>
  );
}

export default InputSearch;










