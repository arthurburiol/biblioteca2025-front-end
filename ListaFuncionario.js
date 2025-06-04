import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaFuncionario() {
    // Estado para armazenar os dados
    const [dados, setDados] = useState([]);

    // Função para listar os usuários
    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario`);
        console.log(data);
        setDados(data);
    };

    // useEffect para carregar os dados ao abrir a página
    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            {/* TÍTULO */}
            <TituloLista
                titulo="Funcionarios"
                descricao="Gerencie aqui os funcionarios cadastrados no sistema"
                rota="/cadastrofuncionario"
            />

            {/* LISTAGEM */}
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((d, i) => (
                            <tr key={i}>
                                <td>
                                    <a
                                        className="btn btn-primary"
                                        href={`/cadastrofuncionario/${d.idfuncionario}`}
                                    >
                                        Alterar
                                    </a>
                                </td>
                                <td>{d.idfuncionario}</td>
                                <td>{d.nomefuncionario}</td>
                                <td>{d.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}