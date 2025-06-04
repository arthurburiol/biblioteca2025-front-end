import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaUsuario() {
    // Estado para armazenar os dados
    const [dados, setDados] = useState([]);

    // Função para listar os usuários
    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/usuario`);
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
                titulo="Usuários"
                descricao="Gerencie aqui os usuários cadastrados no sistema"
                rota="/cadastrousuario"
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
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((d, i) => (
                            <tr key={i}>
                                <td>
                                    <a
                                        className="btn btn-primary"
                                        href={`/cadastrousuario/${d.idusuario}`}
                                    >
                                        Alterar
                                    </a>
                                </td>
                                <td>{d.idusuario}</td>
                                <td>{d.nome}</td>
                                <td>{d.email}</td>
                                <td>{d.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}