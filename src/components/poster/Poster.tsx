import { useState } from "react";
import { Iconefy } from "../iconefy/Iconefy";
import style from "../poster/style.module.css"
import { apiController } from "../../controller/api.controller";
import type { Filme } from "../../pages/home/Home";
import { number } from "zod";
import { id } from "zod/locales";



export interface PosterProps{
    filme:Filme
    isFav?:boolean
    callback?:()=>void
}

export const Poster = ({filme,isFav,callback}:PosterProps) => {
    const [isFavorite, setIsFavorite] = useState(isFav??filme.isFavorite);

    const toggleFavorite = async() => {
        setIsFavorite(true);
        console.log(isFavorite,"isfavorite")
        if(!isFavorite && !isFav){
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
           console.log(res,"res")
        }else if(isFav){
            console.log("entrou no else")
            console.log(filme.id)
            // setIsFavorite(false);
            console.log(isFav)
            //const usuario = JSON.parse(localStorage.getItem("favorito")!)
            const res = await apiController.desfavoritar(filme.id.toString());
            console.log(res,"res")
            if(res && callback){
                callback()
            }
        }

    //    const [upIsFavorite, updateIsFavorite] = useState (filme.)
        
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
