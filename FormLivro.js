import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";
export default function FormLivro() {

    const navegacao = useNavigate();
    const { id } = useParams();
    const [titulo, setTitulo] = useState('');
    const [publicacao, setPublicacao] = useState('');
    const [paginas, setPaginas] = useState('');
    const [idcategoria, setIdcategoria] = useState('');
    const [ideditora, setIdeditora] = useState('');
    const [edicao, setEdicao] = useState('');
    const [resumo, setResumo] = useState('');

    // Volta pagina de Listagem de Livro
    const voltar = () => {
        navegacao('/listalivro');
    }

    // Funcionabilidade que busca o Nome da Livro
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
        setTitulo(data.titulo);
        setPublicacao(data.publicacao);
        setPaginas(data.paginas);
        setIdcategoria(data.idcategoria);
        setIdeditora(data.ideditora);
        setEdicao(data.edicacao);
        setResumo(data.resumo);
    }

    // Metodo Alterar Livro
    const alterar = async () => {
        let body = {
	        "titulo": titulo,
            "publicacao": publicacao,
            "paginas": paginas,
            "idcategoria": idcategoria,
            "ideditora": ideditora,
            "edicao": edicao,
            "resumo": resumo
        };
        await axios.put(`http://localhost:4000/livro/${id}`,body);
        voltar();
    }

    // Metodo Inserir Livro
    const inserir = async () => {
        let body = {
	        "titulo": titulo,
            "publicacao": publicacao,
            "paginas": paginas,
            "idcategoria": idcategoria,
            "ideditora": ideditora,
            "edicao": edicao,
            "resumo": resumo
            
        };
        await axios.post(`http://localhost:4000/livro/`,body);
        voltar();
    }

    // Funcionabilidade botão excluir
    const excluir = async () => {
        await axios.delete(`http://localhost:4000/livro/${id}`,);
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
            <TituloCadastro id={id} titulo="Livro"/>
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
                Nome da Livro
                </label>
                <input
                type="text"
                className="form-control"
                value={titulo}
                onChange={ (evento) => setTitulo(evento.target.value) }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Ano de Publicação
                </label>
                <input
                type="text"
                className="form-control"
                value={publicacao}
                onChange={ (evento) => setPublicacao(evento.target.value) }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Numero de Páginas
                </label>
                <input
                type="text"
                className="form-control"
                value={paginas}
                onChange={ (evento) => setPaginas(evento.target.value) }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Categoria do Livro
                </label>
                <input
                type="text"
                className="form-control"
                value={idcategoria}
                onChange={ (evento) => setIdcategoria(evento.target.value) }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Editora do Livro
                </label>
                <input
                type="text"
                className="form-control"
                value={ideditora}
                onChange={ (evento) => setIdeditora(evento.target.value) }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Numero da Edição
                </label>
                <input
                type="text"
                className="form-control"
                value={edicao}
                onChange={ (evento) => setEdicao(evento.target.value) }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Descrição
                </label>
                <input
                type="text"
                className="form-control"
                value={resumo}
                onChange={ (evento) => setResumo(evento.target.value) }
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