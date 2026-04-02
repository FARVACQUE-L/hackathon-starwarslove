interface Character {
	name: string;
	gender: string;
	species: string;
	homeworld: string;
	height: number;
	eyeColor: string;
	died: number | null;
	masters: string | string[];
	apprentices: string[];
}

export default Character.ts;
