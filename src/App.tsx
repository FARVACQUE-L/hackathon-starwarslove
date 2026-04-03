import "./App.css";
import compatibility from "./utils/compatibility";

function App() {
	const cha1 = {
		id: 13,
		name: "Chewbacca",
		height: 2.28,
		mass: 112,
		gender: "male",
		homeworld: "kashyyyk",
		wiki: "http://starwars.wikia.com/wiki/Chewbacca",
		image:
			"https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
		born: -200,
		bornLocation: "kashyyyk",
		species: "wookiee",
		hairColor: "brown",
		eyeColor: "blue",
		affiliations: [
			"Galactic Republic",
			"Alliance to Restore the Republic",
			"Leia Organa's team",
			"Pathfinders",
			"Endor strike team",
			"Bright Tree tribe",
			"New Republic",
			"Resistance",
		],
		formerAffiliations: [],
	};
	const cha2 = {
		id: 4,
		name: "Darth Vader",
		height: 2.03,
		mass: 120,
		gender: "male",
		homeworld: "tatooine",
		wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
		image:
			"https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
		born: -41,
		died: 4,
		diedLocation: "death star ii, endor system",
		species: "human",
		hairColor: "blond",
		eyeColor: "blue, yellow (dark side)",
		skinColor: "light, later pale",
		cybernetics:
			"Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
		affiliations: [
			"501st Legion",
			"Sith",
			"Galactic Empire",
			"Imperial High Command",
		],
		masters: [
			"Qui-Gon Jinn (informal Jedi Master)",
			"Obi-Wan Kenobi (Jedi Master)",
			"Darth Sidious (Sith Master)",
			"Yoda (Force spirit teacher)",
		],
		apprentices: ["Ahsoka Tano (Padawan)", "Inquisitorius"],
		formerAffiliations: [
			"Jedi Order",
			"Jedi High Council",
			"Galactic Republic",
		],
	};

	const score = compatibility(cha1, cha2);

	return (
		<>
			{cha1.name} + {cha2.name} = <strong>{score}%</strong>
		</>
	);
}

export default App;
