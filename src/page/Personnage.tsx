import { useEffect, useState } from "react";
import CardPerso, {
	type StarWarsCharacter,
} from "../components/CardPersonnages";
import "./Personnage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

type PersonnageProps = {
	onBack?: () => void;
};

function Personnage({ onBack }: PersonnageProps) {
	const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
	const [search, setSearch] = useState("");
	const normalizedSearch = search.toLowerCase();

	useEffect(() => {
		fetch("https://miadil.github.io/starwars-api/api/all.json")
			.then((response) => response.json())
			.then((data: StarWarsCharacter[]) => setCharacters(data));
	}, []);

	const filteredCharacters = characters.filter((character) => {
		const searchableText = [
			character.name,
			character.species || "",
			character.homeworld || "",
		]
			.join(" ")
			.toLowerCase();

		return searchableText.includes(normalizedSearch);
	});

	return (
		<main className="personnage-page">
			<NavBar onTitleClick={onBack} />

			<section className="personnage-container">
				<h1 className="personnage-title">Choisis ton personnage Star Wars !</h1>

				<div className="personnage-search-wrapper">
					<input
						className="personnage-search"
						type="text"
						placeholder="Ta sœur, tu prendras ; ton père, tu éviteras, ta mère te félicitera...."
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
				</div>

				<div className={`cards-grid ${normalizedSearch ? "is-searching" : ""}`}>
					{filteredCharacters.map((character) => (
						<CardPerso key={character.id} character={character} />
					))}
				</div>

				{filteredCharacters.length === 0 && (
					<p className="personnage-empty">Aucun personnage trouvé.</p>
				)}
				<Footer />
			</section>
		</main>
	);
}

export default Personnage;
