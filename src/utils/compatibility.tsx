import type Character from "../types/Character";

const affiliationLight = [
	// Jedi & République
	"Jedi Order",
	"Jedi High Council",
	"Jedi assault team",
	"Galactic Republic",
	"Grand Army of the Republic",
	"Republic Navy",
	"212th Attack Battalion",
	"104th Battalion",
	"41st Elite Corps",
	"501st Legion", // clone trooper (côté lumière avant ordre 66)
	"D-Squad",
	"Galactic Marines",

	// Rébellion & Alliance
	"Alliance to Restore the Republic",
	"Alliance Fleet",
	"Alliance High Command",
	"Alliance Military",
	"Massassi Group",
	"Red Squadron",
	"Rogue Squadron",
	"Gold Squadron",
	"Blue Squadron",
	"Green Squadron",
	"Phoenix Cell",
	"Tierfon Yellow Aces",
	"Phantom Squadron",
	"Alderaanian Resistance",
	"Mon Mothma's rebel cell",
	"Kota's Militia",

	// Nouvelle République & Résistance
	"New Republic",
	"New Republic Defense Fleet",
	"New Republic military",
	"New Republic Pilots Commission",
	"Resistance",
	"Resistance High Command",
	"Resistance Fleet Command",
	"Resistance navy",
	"Resistance spy droid network",
	"Black Squadron",
	"Rapier Squadron",
	'"Reb" Squadron',

	// Familles & équipes alliées
	"Leia Organa's team",
	"Endor strike team",
	"Bright Tree tribe",
	"Pathfinders",
	"House of Organa",
	"Skywalker family",
	"Lars family",
	"Leia Organa's team",

	// Naboo (côté lumière)
	"Royal House of Naboo",
	"Royal Naboo Security Forces",
	"Naboo Royal Handmaidens",
	"Naboo delegation",
	"Bravo Flight",

	// Autres institutions lumière
	"Mon Calamari Guard",
	"Loyalist Committee",
	"Mon Cala monarchy",
	"Delegation of 2,000",
	"Gungan High Council",
	"Gungan Grand Army",
	"FN Corps", // Finn après sa défection
];

const affiliationDark = [
	// Sith & Empire
	"Sith",
	"Order of the Sith Lords",
	"Galactic Empire",
	"Imperial High Command",
	"Imperial Officer Corps",
	"Imperial Navy",
	"Imperial Military",
	"Imperial Senate", // institution de l'Empire
	"Imperial Ruling Council",
	"Battle Station Command",
	"Tarkin Initiative",
	"Dark Empire",
	"Inquisitorius",

	// Premier Ordre
	"First Order",
	"First Order military",
	"FN Corps", // avant la défection de Finn

	// Séparatistes
	"Confederacy of Independent Systems",
	"Separatist Droid Army",
	"Separatist Council",
	"Separatist Alliance",

	// Organisations criminelles au service du côté obscur
	"Death Watch",
	"Shadow Collective",
	"Nightbrothers",
	"Cad Bane's group",

	// Complices directs des Sith
	"Lost Twenty", // Dooku qui a quitté l'Ordre Jedi
];

// const affiliationNeutral = [
// 	// Organisations commerciales / neutres politiquement
// 	"Trade Federation", // opportuniste, change de camp
// 	"Techno Union",
// 	"InterGalactic Banking Clan",
// 	"Muunilinst Banking Clan",
// 	"Confederacy of Independent Systems", // → déjà en dark mais souvent neutre au départ
// 	"Damask Holdings",

// 	// Criminels & chasseurs de primes
// 	"Bounty Hunters' Guild",
// 	"Jabba Desilijic Tiure's criminal empire",
// 	"Boba Fett's syndicate",
// 	"Hutt Clan",
// 	"Grand Hutt Council",
// 	"Crymorah syndicate",
// 	"Chelli Aphra's crew",

// 	// Familles / clans / tribus sans camp défini
// 	"Mandalorian",
// 	"Scyre",
// 	"Unidentified clan",
// 	"Fortuna family",
// 	"House Palpatine",
// 	"House Valorum",
// 	"House Dooku",
// 	"Elder Houses",
// 	"Desilijic",

// 	// Institutions locales neutres
// 	"Cloud City",
// 	"Cloud City colony",
// 	"Calrissian Enterprises",
// 	"Dex's Diner",
// 	"Watto's shop",
// 	"Mos Espa",
// 	"Lars family", // simple famille de fermiers
// 	"Skywalker family",

// 	// Académies / formations
// 	"Prefsbelt Fleet Camp",
// 	"Sullust Sector Spacefarers Academy",
// 	"Judicial Forces",

// 	// Autres
// 	"Uprising",
// 	"Mabari",
// 	"Coruscant provisional government",
// 	"Office of the Chancellor", // neutre car dépend de qui gouverne
// ];

function characterMasters(character: Character) {
	if (!character.masters) return [];
	return Array.isArray(character.masters)
		? character.masters
		: [character.masters];
}
function getSide(character1: Character, character2: Character) {
	const side = (character: Character) => {
		const allAffiliations = [
			...(character.affiliations || []),
			...(character.formerAffiliations || []),
		];

		if (allAffiliations.some((a) => affiliationDark.includes(a))) return "dark";
		if (allAffiliations.some((a) => affiliationLight.includes(a)))
			return "light";
		return "neutral";
	};
	const side1 = side(character1);
	const side2 = side(character2);
	return { side1, side2 };
}

function compatibility(character1: Character, character2: Character) {
	let result = 50;
	const { side1, side2 } = getSide(character1, character2);

	if (side1 === side2) {
		result += 5;
	} else if (
		(side1 === "dark" && side2 === "light") ||
		(side1 === "light" && side2 === "dark")
	) {
		result += -5;
	}
	if (character1.species === "droide" && character2.species !== "droide") {
		result += -50;
	} else if (character1.species === character2.species) {
		result += 15;
	} else {
		result += -5;
	}

	if (
		character1.homeworld &&
		character2.homeworld &&
		character1.homeworld === character2.homeworld
	) {
		result += 15;
	} else {
		result += 5;
	}

	if (character1.eyeColor === character2.eyeColor) {
		result += 30;
	}

	if (character1.height && character2.height) {
		if (character1.gender === "male" && character2.gender === "female") {
			if (character1.height > character2.height) {
				result += 10;
			} else {
				result += -10;
			}
		} else if (character1.gender === "female" && character2.gender === "male") {
			if (character1.height > character2.height) {
				result += -10;
			} else {
				result += 10;
			}
		}
	}
	if (
		character1.died !== undefined &&
		character1.died !== null &&
		character2.died !== undefined &&
		character2.died !== null
	) {
		result += -5;
	} else if (
		(character1.died !== undefined && character1.died !== null) ||
		(character2.died !== undefined && character2.died !== null)
	) {
		result += -50;
	} else {
		result += 10;
	}
	if (characterMasters(character1).includes(character2.name)) {
		result += -15;
	}
	if (characterMasters(character2).includes(character1.name)) {
		result += -15;
	}
	if (character1.apprentices?.includes(character2.name)) {
		result += -15;
	}
	if (character2.apprentices?.includes(character1.name)) {
		result += -15;
	}

	return result;
}

export default compatibility;
