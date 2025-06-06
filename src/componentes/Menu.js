export default function Menu() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid btn btn-primary">
                <a className="navbar-brand" href="#">
                Biblioteca
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/categorias">
                        Categorias
                    </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Cadastros
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                        <a className="dropdown-item" href="/categoria">
                            Categoria
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Undefinid
                        </a>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Undefinid
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};