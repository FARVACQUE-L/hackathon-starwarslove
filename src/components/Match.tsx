import { useEffect, useState } from "react";
import "./Match.css";

import compatibility, { getImageFromScore } from "../utils/compatibility";
import InputSearch from "./InputSearch";

import type Character from "../types/Character";

import CardPerso from "./CardPerso";
import etoi from "../assets/et.png"
function Match() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [leftChar, setLeftChar] = useState<Character | null>(null);
    const [rightChar, setRightChar] = useState<Character | null>(null);
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
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
 if (!leftChar || !rightChar) return;
  const result = compatibility(leftChar, rightChar);
  setScore(result);
    };

    return (
        <div className="match-container">
            <div className="match-row">

                {/* LEFT */}
                <div className="profile-block left">
                    <InputSearch setStarWarsCharacter={setLeftChar}/>

                    {leftChar ? (
                        <CardPerso character={leftChar} />
                    ) : (
                        <div className="profile">Profil gauche</div>
                    )}

                    <button className="random-btn random-left" onClick={randomLeft}>
                        ⚡ Random
                    </button>
                </div>

                {/* CENTRE */}
                <div className="center">  {score !== null ? (
                    <img src={getImageFromScore(score)} alt="résultat compatibilité" />
                        ) : (
                    <span>⭐</span>
                    )}
                </div>

                {/* RIGHT */}
                <div className="profile-block right">
                    <InputSearch setStarWarsCharacter={setRightChar}/>

                    {rightChar ? (
                        <CardPerso character={rightChar} />
                    ) : (
                        <div className="profile">Profil droite</div>
                    )}

                    <button className="random-btn random-right" onClick={randomRight}>
                        🔥 Random
                    </button>
                </div>

            </div>

            <button className="match-btn" onClick={handleMatch}>
                MATCH !
            </button>
            {score !== null && leftChar && rightChar && (
                <div className="match-result">
        <p>{leftChar.name} + {rightChar.name} = <strong>{score}%</strong></p>
            {/* <img src={getImageFromScore(score)} alt="résultat" /> */}
      </div>
    )}
        </div>
    );
}

export default Match;