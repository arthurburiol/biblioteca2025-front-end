export default function Home() {
    return (
        <>
        {/* BUTTONS */}
        <div className="container">
            <div className="col-lg-12 text-center mt-2">
            <button type="button" className="btn btn-primary btn-md">
                Large button
            </button>
            <button type="button" className="btn btn-primary btn-md">
                Large button
            </button>
            <button type="button" className="btn btn-primary btn-md">
                Large button
            </button>
            <button type="button" className="btn btn-primary btn-md">
                Large button
            </button>
            </div>
        </div>

        {/* CARDS */}
        <div className="container mt-4">
            <div className="row">
            <div className="col-md-3">
                <div className="card">
                <img
                    src="/images/livrosImg.jpg"
                    className="card-img-top"
                    alt="livro "
                />
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">Edit</p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <img
                    src="/images/livrosImg.jpg"
                    className="card-img-top"
                    alt="livro "
                />
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">Edit</p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <img
                    src="/images/livrosImg.jpg"
                    className="card-img-top"
                    alt="livro "
                />
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">Edit</p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <img
                    src="/images/livrosImg.jpg"
                    className="card-img-top"
                    alt="livro "
                />
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">Edit</p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
};