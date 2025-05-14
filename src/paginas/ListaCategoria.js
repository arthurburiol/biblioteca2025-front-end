import TituloLista from "../componentes/TituloLista";

export default function ListaCategoria() {
    return (
        <>
        {/* BUSCAR LISTAGEM */}
            <TituloLista titulo="Categorias" 
            descricao="Gerencie aqui as categorias dos livros da biblioteca"
            rota="/categoria" />
        {/* LISTAGEM */}
        <div className="container mt-5">
            <table className="table">
            <thead>
                <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th>3</th>
                <td>Larry the Bird</td>
                <td />
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
    )
};