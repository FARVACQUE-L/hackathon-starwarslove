import { useEffect, useState } from "react";
import "./Match.css";

type Character = {
    id: number;
    name: string;
    image: string;
};

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
        setRightChar(getRandom());
    };

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
                    <div className="profile">
                        {leftChar ? (
                            <>
                                <img src={leftChar.image} alt={leftChar.name} />
                                <p>{leftChar.name}</p>
                            </>
                        ) : (
                            <p>Profil gauche</p>
                        )}
                    </div>

                    {/* ✅ bouton sous le profil gauche */}
                    <button className="random-btn random-left" onClick={randomLeft}>
                        ⚡ Random Light
                    </button>
                </div>

                {/* CENTRE */}
                <div className="center">⭐</div>

                {/* RIGHT */}
                <div className="profile-block">
                    <div className="profile">
                        {rightChar ? (
                            <>
                                <img src={rightChar.image} alt={rightChar.name} />
                                <p>{rightChar.name}</p>
                            </>
                        ) : (
                            <p>Profil droit</p>
                        )}
                    </div>

                    {/* ✅ bouton sous le profil droit */}
                    <button className="random-btn random-right" onClick={randomRight}>
                        🔥 Random Dark
                    </button>
                </div>

            </div>

            {/* bouton global */}
            <button className="match-btn" onClick={handleMatch}>
                MATCH !
            </button>

        </div>
    );
}

export default Match;