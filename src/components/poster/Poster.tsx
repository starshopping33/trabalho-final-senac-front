import { useState } from "react";
import { Iconefy } from "../iconefy/Iconefy";
import style from "../poster/style.module.css"

export const Poster = () => {
    const [isFavorite, SetIsFavorite] = useState(false);

    const toggleFavorite = () => {
        SetIsFavorite(!isFavorite);
    };

    return (
        <section className={style.section}>
            <button onClick={toggleFavorite} className={style.favoriteButton}>
                {isFavorite ? (
                    <Iconefy icon="mdi--heart-outline" color="yellow"/>
                ):(
                    <Iconefy icon="mdi--heart-outline" color="yellow"/>
                )}
            </button>
        </section>
    )
}