// import { useState } from "react";
import { apiController } from "../../controller/api.controller";
import style from "../comment/style.module.css";
import { Iconefy } from "../iconefy/Iconefy";
import type { icreatecomentario } from "../../schemas/comment.schemas";
import { useState } from "react";

export const Comment: React.FC = () => {
  const [isComment, setIsComment] = useState(false);
  const [commentText, setCommentText] = useState("");

  const toggleComment = () => {
    setIsComment(!isComment);
  };

  const handleSubmit = async () => {
    if (!commentText.trim()) return;

    try {
      const comentarioData: icreatecomentario = {
        conteudo: commentText,
        nome_Filme: "Exemplo Filme",
        imagem: "https://exemplo.com/imagem.jpg"
      };

      const res = await apiController.comentar(comentarioData);

      console.log("Comentário enviado:", comentarioData);
      console.log("res", res);

      setCommentText(""); 
      setIsComment(false); 
    } catch (error) {
      console.error("Erro ao comentar:", error);
    }
  };

  return (
    <section className={style.section}>
      <h1>Comentário do Admin</h1>

      <Iconefy
        onClick={toggleComment}
        className={style.commentButton}
        icon="material-symbols--comment"
      />

      {isComment && (
        <div className={style.commentBox}>
          <textarea
            className={style.textarea}
            placeholder="Escreva seu comentário..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className={style.sendButton} onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      )}
    </section>
  );
};
