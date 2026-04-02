import { useState } from "react";
import { useEffect } from "react";

import "./InputSearch.css";

function InputSearch() {
	interface Character {
		name: string;
	}

	const [characters, setCharacters] = useState<Character[]>([]); //typage tableau de plusieurs Character

	useEffect(() => {
		fetch("https://miadil.github.io/starwars-api/api/all.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => setCharacters(data));
	}, []);

	//ul liste invisible, on la mettra visible à la frappe
	const [isVisible, setIsVisible] = useState(false);

	const listStyle: React.CSSProperties = {
		position: "absolute",
		top: "100%",
		left: "0%",
		zIndex: 100,
		display: isVisible ? "block" : "none", // conditionnel par rapport au usestate !
	};

	// input
	const [inputValue, setInputValue] = useState(""); //suffit pour typer en string

	const [filteredCharacters, setFilteredCharacters] =
		useState<Character[]>(characters);

	function filterCharacters(value: string) {
		setFilteredCharacters(
			characters.filter(
				(character) =>
					character.name.toLowerCase().startsWith(value.toLowerCase()), // mise en minusucle pour comparer sinon.... !!
			),
		);
	} // on filtre les characters (s'activera selon ce qu'on tape dans l'input)

	/* autre solution plutot que fonction et usestate : 
    const filteredCharacters = characters.filter((character) =>
        character.name.startsWith(inputValue),
    ); */

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value); // on actualise inputValue
		filterCharacters(e.target.value); // on filtre
		setIsVisible(true); // on affiche la liste
	}

	// li
	function handleSelect(name: string) {
		setInputValue(name); //on actualise inputValue selon la ligne sélectionnée
	}

	return (
		//htmlFor à la place de for, parce qu'on est en JSX et for est un terme JS.... comme class --> className
		<div className="input-container">
			<label htmlFor="character" className="character-search">
				Sélectionnez votre personnage :{" "}
			</label>
			<input
				id="character1"
				name="character"
				className="character-search"
				placeholder="Personnage 1"
				value={inputValue}
				onChange={(e) => onChange(e)}
				onBlur={() => setIsVisible(false)}
			></input>
			<ul style={listStyle} className="characters-list">
				{filteredCharacters.map((character) => (
					<li
						key={character.name}
						className="selected-character"
						onMouseDown={() => handleSelect(character.name)}
						onKeyDown={(e) => e.key === "Enter" && handleSelect(character.name)}
					>
						{character.name}
					</li>
					//onMouseDown pour que ça soit joué à l'appui du bouton-souris, avant onBlur qui masque la liste
					//onKeyDown : idem pour l'accessibilité
					//onBlur: dès qu'on clique ailleurs
				))}
			</ul>
		</div>
	);
}

export default InputSearch;
