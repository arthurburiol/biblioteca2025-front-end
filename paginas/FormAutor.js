import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";
export default function FormAutor() {

    const navegacao = useNavigate();
    const { id } = useParams();
    // Declarar um UseState para cada campo da tabela
    const [nomeautor, setNomeAutor] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [biografia, setBiografia] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [foto, setFoto] = useState('');

    // Volta pagina de Listagem de Autores
    const voltar = () => {
        navegacao('/listaautor');
    }

    // Funcionabilidade que busca o Nome do Autor
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/autor/${id}`);
        // Carregar cada campo na sua respectiva variavél
        setNomeAutor(data.nomeautor);
        setNascimento(data.nascimento);
        setBiografia(data.biografia);
        setNacionalidade(data.nacionalidade);
        setFoto(data.foto);
    }

    // Metodo Alterar Dados Autor
    const alterar = async () => {
        // Montar o json do body com todos os campos que precisam ser enviados
        let body = {
                "nomeautor": nomeautor,
                "nascimento": nascimento,
                "biografia": biografia,
                "nacionalidade": nacionalidade,
                "foto": foto
                };
        await axios.put(`http://localhost:4000/autor/${id}`,body);
        voltar();
    }

    // Metodo Inserir Autor
    const inserir = async () => {
         let body = {
                "nomeautor": nomeautor,
                "nascimento": nascimento,
                "biografia": biografia,
                "nacionalidade": nacionalidade,
                "foto": foto
                };
        await axios.post(`http://localhost:4000/autor/`,body);
        voltar();
    }

    // Funcionabilidade botão excluir
    const excluir = async () => {
        await axios.delete(`http://localhost:4000/autor/${id}`,);
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
            <TituloCadastro id={id} titulo="Autor"/>
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
                Nome do Autor
                </label>
                <input
                type="text"
                className="form-control"
                value={nomeautor}
                onChange={ (evento) => setNomeAutor(evento.target.value) }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                Nascimento
                </label>
                <input
                type="text"
                className="form-control"
                value={nascimento}
                onChange={ (evento) => setNascimento(evento.target.value) }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                Biografia
                </label>
                <textarea className="form-control"
                value={biografia}
                onChange={ (evento) => setBiografia(evento.target.value) }
                rows={10}
                >
                </textarea>
            </div>

            <div className="mb-3">
                <label className="form-label">
                Nacionalidade
                </label>
                <input
                type="text"
                className="form-control"
                value={nacionalidade}
                onChange={ (evento) => setNacionalidade(evento.target.value) }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                Foto
                </label>
                <input
                type="text"
                className="form-control"
                value={foto}
                onChange={ (evento) => setFoto(evento.target.value) }
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