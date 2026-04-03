import "./CardPerso.css";

import type Character from "../types/Character";

type Props = {
    character: Character;
};

function CardPerso({ character }: Props) {
    return (
        <article className="card-perso">
            <img
                src={character.image}
                alt={character.name}
                className="card-perso__image"
            />

            <div className="card-perso__content">
                <h2>{character.name}</h2>
            </div>
        </article>
    );
}

export default CardPerso;