export default interface Character {
	id: number;
	name: string;
	height?: number;
	mass?: number;
	gender: string;
	homeworld?: string;
	wiki?: string;
	image?: string;
	born?: number | string;
	bornLocation?: string;
	died?: number | null;
	diedLocation?: string;
	species: string;
	hairColor?: string;
	eyeColor?: string;
	skinColor?: string;
	cybernetics?: string | string[];
	affiliations: string[];
	formerAffiliations: string[];
	masters?: string | string[];
	apprentices?: string | string[];
	// Droid-specific fields
	dateCreated?: number;
	dateDestroyed?: number;
	destroyedLocation?: string;
	creator?: string;
	manufacturer?: string;
	productLine?: string;
	model?: string;
	class?: string;
	sensorColor?: string;
	platingColor?: string;
	equipment?: string | string[];
	armament?: string | string[];
	degree?: string;
	// Other optional fields
	era?: string | string[];
	kajidic?: string;
}
