import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaLivro() {
    // Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:4000/livro`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);


    return (
        <>
        {/* BUSCAR LISTAGEM */}
            <TituloLista titulo="Livros" 
            descricao="Gerencie aqui os livros da biblioteca"
            rota="/cadastrolivro" />
        {/* LISTAGEM */}
        <div className="container mt-5">
            <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Publicação</th>
                    <th>Categoria</th>
                    <th>Editora</th>
                    <th>Edição</th>
                </tr>
            </thead>
            <tbody>
                { dados.map( (d, i) => (
                    <tr>
                        <td>
                            <a className="btn btn-primary" 
                            href={`/cadastrolivro/${d.idlivro}`}>Alterar</a>
                        </td>
                        <td>{d.idlivro}</td>
                        <td>{d.titulo}</td>
                        <td>{d.publicacao}</td>
                        <td>{d.idcategoria}</td>
                        <td>{d.ideditora}</td>
                        <td>{d.edicao}</td>
                    </tr>
                ) ) }

            </tbody>
            </table>
        </div>
        </>
    )
};