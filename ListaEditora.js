import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaEditora() {
    // Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:4000/editora`);
        console.log(data);
        setDados(data);
    }   

    useEffect( () => {
        listar();
    }, []);

    return (
        <>
        {/* BUSCAR LISTAGEM */}
            <TituloLista titulo="Editora" 
            descricao="Gerencie aqui as editoras dos livros da biblioteca"
            rota="/cadastroeditora" />
        {/* LISTAGEM */}
        <div className="container mt-5">
            <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Editora</th>
                    <th>CNPJ</th>
                    <th>Endereço</th>
                </tr>
            </thead>
            <tbody>
                { dados.map( (d, i) => (
                    <tr>
                        <td>
                            <a className="btn btn-primary" 
                            href={`/cadastroeditora/${d.ideditora}`}>Alterar</a>
                        </td>
                        <td>{d.ideditora}</td>
                        <td>{d.nomeeditora}</td>
                        <td>{d.cnpj}</td>
                        <td>{d.endereco}</td>
                    </tr>
                ) ) }

            </tbody>
            </table>
        </div>
        </>
    )
};