
import React from "react";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../api.jsx';
export function ModalC(props) {

    let [comentario, setComentario] = useState("");
    let [idmural, setIdmural] = useState("");

    useEffect(() => {
        api
            .get("/murais/list")
            .then(({ data }) => {
                const dados = data.data;
                var newMurais = [];
                Object.keys(dados).map((key) => {
                    const mural = dados[key];
                    newMurais.push({
                        idmural: mural.idmural,
                    });
                });
                setIdmural(newMurais);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    function criarComentario()  {
        let valid = true;
        console.log(1);
        if (comentario == "" || props.idmural =="" ) {
          valid = false;
          sendError("O campo não pode estar vazio");
        }
        if (valid) {
          let newComentario = {
           comentario: comentario,
           idmural: props.idmural,
          };
          api.post("comentarios/create", newComentario).then((data) => {
            if (data.status == "200") {
              toast.success("Comentario criado com sucesso", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              sendError("Erro ao criar Comentario");
            }
          });
        }
      };

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Enviar um comentário</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <textarea type="text" rows="6" cols="50" className="form-control" placeholder="Caso tenha alguma critica sobre este mural pode sempre enviar-nos um comentário" onChange={e => setComentario(e.target.value)} />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="Submit" value="submit" className="btn btn-primary w-100" onClick={criarComentario}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalC;