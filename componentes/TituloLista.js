export default function TituloLista(props) {
    return (
        <>
        {/* BUSCAR LISTAGEM */}
        <div className="container mt-4">
            <div className="row">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descricao}</p>
                <a href={props.rota} className="btn btn-primary btn-lg">
                    Novo
                </a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
};