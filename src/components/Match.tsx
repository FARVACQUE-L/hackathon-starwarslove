import { useEffect, useState } from "react";
import "./Match.css";
import CardPerso, { type StarWarsCharacter } from "./CardPerso";
type Character = StarWarsCharacter;

function Match() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [leftChar, setLeftChar] = useState<Character | null>(null);
    const [rightChar, setRightChar] = useState<Character | null>(null);

    useEffect(() => {
        fetch("https://starwarsapi.remote-8.wilders.dev/all.json")
            .then((res) => res.json())
            .then((data) => setCharacters(data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (characters.length > 0) {
            const c1 = getRandom();
            let c2 = getRandom();

            while (c1.id === c2.id) {
                c2 = getRandom();
            }

            setLeftChar(c1);
            setRightChar(c2);
        }
    }, [characters]);

    const getRandom = () => {
        return characters[Math.floor(Math.random() * characters.length)];
    };

    // 🎲 random gauche
    const randomLeft = () => {
        if (characters.length === 0) return;
        setLeftChar(getRandom());
    };

    // 🎲 random droite
    const randomRight = () => {
        if (characters.length === 0) return;

        let newChar = getRandom();

        while (leftChar && newChar.id === leftChar.id) {
            newChar = getRandom();
        }

        setRightChar(newChar);
    }; // ✅ fermeture manquante ici

    // ❤️ MATCH
    const handleMatch = () => {
        if (characters.length === 0) return;

        const c1 = getRandom();
        let c2 = getRandom();

        while (c1.id === c2.id) {
            c2 = getRandom();
        }

        setLeftChar(c1);
        setRightChar(c2);
    };

    return (
        <div className="match-container">
            <div className="match-row">

                {/* LEFT */}
                <div className="profile-block">
                    {leftChar ? (
                        <CardPerso character={leftChar} />
                    ) : (
                        <div className="profile">Profil gauche</div>
                    )}

                    <button className="random-btn random-left" onClick={randomLeft}>
                        ⚡ Random Light
                    </button>
                </div>

                {/* CENTRE */}
                <div className="center">⭐</div>

                {/* RIGHT */}
                <div className="profile-block">
                    {rightChar ? (
                        <CardPerso character={rightChar} />
                    ) : (
                        <div className="profile">Profil droite</div>
                    )}

                    <button className="random-btn random-right" onClick={randomRight}>
                        🔥 Random Dark
                    </button>
                </div>

            </div>

            <button className="match-btn" onClick={handleMatch}>
                MATCH !
            </button>
        </div>
    );
}

export default Match;