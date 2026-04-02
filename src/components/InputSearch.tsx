import { useState } from "react";
import { useEffect } from "react";

import "./InputSearch.css";

//faire une props avec for pour label

interface LabelProps {
	for: "string";
}

function InputSearch() {
	interface Character {
		name: string;
	}
	const [characters, setCharacters] = useState<Character[]>([]);

	useEffect(() => {
		fetch("https://miadil.github.io/HarryPotterApi/api/json/characters.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => setCharacters(data));
	}, []);

	console.log(characters);

	// input
	const [inputValue, setInputValue] = useState("");

	/* 	function filtrer(e: React.ChangeEvent<HTMLLiElement>) {
        //renommer la fonction
        pour affihcer les li qui correpsondent à ce qui est tapé
        } */

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		/* appeler Filtrer ; */
		setInputValue(e.target.value);
		setIsVisible(true);
	}

	//ul liste
	const [isVisible, setIsVisible] = useState(false);

	const listStyle: React.CSSProperties = {
		position: "absolute",
		top: "100%",
		left: "50%",
		zIndex: 100,
		display: isVisible ? "block" : "none", // ← conditionnel par rapport au usestate !
	};

	// li
	function handleSelect(name: string) {
		setInputValue(name);
	}

	return (
		<>
			<div className="relative">
				<label for="character">Sélectionnez votre personnage : </label>
				<input
					id="character1"
					name="character"
					list="characters"
					placeholder="Personnage 1"
					value={inputValue}
					onChange={(e) => onChange(e)}
					onBlur={() => setIsVisible(false)}
				></input>
				<ul style={listStyle}>
					{characters.map((character) => (
						<li
							key={character.name}
							onMouseDown={() => handleSelect(character.name)}
							onKeyDown={(e) =>
								e.key === "Enter" && handleSelect(character.name)
							}
						>
							{character.name}
						</li>
						//onMouseDown pour que ça soit joué à l'appui du bouton-souris, avant onBlur qui masque la liste
						//onKeyDown : idem pour l'accessibilité
						//onBlur: dès qu'on clique ailleurs
					))}
				</ul>
			</div>
			<figure></figure>
		</>
	);
}

export default InputSearch;
