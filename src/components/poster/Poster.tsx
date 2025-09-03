import { useState } from "react";
import { Iconefy } from "../iconefy/Iconefy";
import style from "../poster/style.module.css"
import { apiController } from "../../controller/api.controller";
import type { Filme } from "../../pages/home/Home";



export interface PosterProps{
    filme:Filme
}

export const Poster = ({filme}:PosterProps) => {
    const [isFavorite, setIsFavorite] = useState(filme.isFavorite);

    const toggleFavorite = async() => {
        setIsFavorite(!isFavorite);
        // filme.isFavorite = !filme.isFavorite
        const usuario = JSON.parse(localStorage.getItem("usuario")!)
       const res = await apiController.favoritar(
        {
            filme_id: filme.id,
            titulo: filme.title,
            usuario_id: usuario.id,
            poster_path:filme.poster_path
        }
       )

    //    const [upIsFavorite, updateIsFavorite] = useState (filme.)
        console.log(res,"res")
    //    const toggleUpdateFavorite = async () =>
    //     updateIsFavorite (!upIsFavorite)  
    };  


    return (
        
            <Iconefy
                
                onClick={toggleFavorite}
                className={style.favoriteButton}
                icon="mdi:heart"
                color={isFavorite ? "yellow" : "white"}
            />
        
    );
};
