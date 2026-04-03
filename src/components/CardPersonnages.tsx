import "./CardPersonnages.css";

export type StarWarsCharacter = {
	id: number;
	name: string;
	image: string;
	species?: string;
	homeworld?: string;
	gender?: string;
	eyeColor?: string;
	height?: number | string;
	affiliations?: string[];
	affiliation?: string;
};

type Props = {
	character: StarWarsCharacter;
};

function getGenderLabel(gender?: string) {
	const value = gender;

	if (value === "male" || value === "homme") {
		return "♂";
	}

	if (value === "female" || value === "femme") {
		return "♀";
	}

	return gender || "Inconnu";
}

function CardPerso({ character }: Props) {
	const affiliation = character.affiliation || character.affiliations?.[0] || "Inconnu";

	return (
		<article className="card-perso">
			<img
				src={character.image}
				alt={character.name}
				className="card-perso__image"
			/>

			<div className="card-perso__content">
				<h2>{character.name}</h2>
				<p>
					<strong>Espèce:</strong> {character.species || "Inconnu"}
				</p>
				<p>
					<strong>Genre:</strong> {getGenderLabel(character.gender)}
				</p>
				<p>
					<strong>Planète:</strong> {character.homeworld || "Inconnu"}
				</p>
				<p>
					<strong>Couleur des yeux:</strong> {character.eyeColor || "Inconnu"}
				</p>
				<p>
					<strong>Taille:</strong> {character.height || "Inconnu"}
				</p>
				<p>
					<strong>Affiliation:</strong> {affiliation}
				</p>
			</div>
		</article>
	);
}

export default CardPerso;
