import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";
export default function FormCategoria() {

    const navegacao = useNavigate();
    const { id } = useParams();
    const [nomecategoria, setNomeCategoria] = useState('');

    // Volta pagina de Listagem de Categoria
    const voltar = () => {
        navegacao('/listacategoria');
    }

    // Funcionabilidade que busca o Nome da Categoria
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/categoria/${id}`);
        setNomeCategoria(data.nomecategoria);
    }

    // Metodo Alterar Categoria
    const alterar = async () => {
        let body = {
	        "nomecategoria": nomecategoria
        };
        await axios.put(`http://localhost:4000/categoria/${id}`,body);
        voltar();
    }

    // Metodo Inserir Categoria
    const inserir = async () => {
        let body = {
	        "nomecategoria": nomecategoria
        };
        await axios.post(`http://localhost:4000/categoria/`,body);
        voltar();
    }

    // Funcionabilidade botão excluir
    const excluir = async () => {
        await axios.delete(`http://localhost:4000/categoria/${id}`,);
        voltar();
    }

    // Funcionabilidade de Salvar
    const salvar = async () => {
        if (id){
            alterar();
        }
        else {
            inserir();
        }
    }

    useEffect(()=>{
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
        {/* FORMULARIO DE CADASTRO */}
        <div className="container mt-5">
            <TituloCadastro id={id} titulo="Categoria"/>
            <form>
            <div className="mb-3">
                <label className="form-label">
                Código
                </label>
                <input
                type="text"
                className="form-control"
                value={id}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Nome da Categoria
                </label>
                <input
                type="text"
                className="form-control"
                value={nomecategoria}
                onChange={ (evento) => setNomeCategoria(evento.target.value) }
                />
            </div>
            <button type="button" className="btn btn-primary" onClick={ () => salvar() }>
                Salvar
            </button>
            <button type="button" className="btn btn-secondary" onClick={ () => voltar() }>
                Cancelar
            </button>
            { id && (
                <button type="button" className="btn btn-danger" onClick={ () => excluir() }>
                    Excluir
                </button>
            )}
            </form>
        </div>
        </>
    )
};