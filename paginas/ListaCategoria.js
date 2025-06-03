import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaCategoria() {
    // Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:4000/categoria`);
        console.log(data);
        setDados(data);
    }   

    useEffect( () => {
        listar();
    }, []);

    return (
        <>
        {/* BUSCAR LISTAGEM */}
            <TituloLista titulo="Categorias" 
            descricao="Gerencie aqui as categorias dos livros da biblioteca"
            rota="/cadastrocategoria" />
        {/* LISTAGEM */}
        <div className="container mt-5">
            <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                { dados.map( (d, i) => (
                    <tr>
                        <td>
                            <a className="btn btn-primary" 
                            href={`/cadastrocategoria/${d.idcategoria}`}>Alterar</a>
                        </td>
                        <td>{d.idcategoria}</td>
                        <td>{d.nomecategoria}</td>
                    </tr>
                ) ) }

            </tbody>
            </table>
        </div>
        </>
    )
};