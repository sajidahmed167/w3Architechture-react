const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3  bg-body rounded position-fixed w-100 zindex">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"><strong>BR</strong> Architects</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3 ms-3">
                        <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item me-3 ms-3">
                            <a className="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item me-3 ms-3">
                            <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                        </li>  
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
