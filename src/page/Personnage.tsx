import { useEffect, useState } from "react";
import CardPerso, { type StarWarsCharacter } from "../components/CardPerso";
import "./Personnage.css";

function Personnage() {
	const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);

	useEffect(() => {
		fetch("https://miadil.github.io/starwars-api/api/all.json")
			.then((response) => response.json())
			.then((data: StarWarsCharacter[]) => setCharacters(data));
	}, []);

	return (
		<main className="personnage-page">
			<section className="personnage-container">
				<h1>Choisis ton personnage Star Wars</h1>(
				<div className="cards-grid">
					{characters.map((character) => (
						<CardPerso key={character.id} character={character} />
					))}
				</div>
				)
			</section>
		</main>
	);
}

export default Personnage;
