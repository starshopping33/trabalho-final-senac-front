import { useState } from "react";
import { Iconefy } from "../iconefy/Iconefy";
import style from "../poster/style.module.css"
import { apiController } from "../../controller/api.controller";

export const Poster = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async() => {
        setIsFavorite(!isFavorite);
        //api favoritar
       // apiController.favoritar()

    };

    return (
        <section className={style.section}>
            <Iconefy
                onClick={toggleFavorite}
                className={style.favoriteButton}
                icon="mdi:heart"
                color={isFavorite ? "yellow" : "white"}
            />
        </section>
    );
};
