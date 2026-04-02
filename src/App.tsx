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
		id: 14,
		name: "Han Solo",
		height: 1.8,
		mass: 80,
		gender: "male",
		homeworld: "corellia",
		wiki: "http://starwars.wikia.com/wiki/Han_Solo",
		image:
			"https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
		born: -29,
		bornLocation: "corellia",
		died: 34,
		diedLocation: "starkiller base",
		species: "human",
		hairColor: "brown, later gray",
		eyeColor: "hazel",
		skinColor: "light",
		affiliations: [
			"Galactic Empire",
			"Jabba Desilijic Tiure's criminal empire",
			"Alliance to Restore the Republic",
			"Leia Organa's team",
			"Endor strike team",
			"Kingdom of Han",
			"Bright Tree tribe",
			"New Republic",
			"New Republic Pilots Commission",
			"Han Solo's shipping company",
			"Resistance",
		],
		formerAffiliations: [],
	};

	const score = compatibility(cha1, cha2);

	return (
		<>
			<h1>Star Wars Love</h1>
			<p>
				{cha1.name} + {cha2.name} = <strong>{score}%</strong>
			</p>
		</>
	);
}

export default App;
