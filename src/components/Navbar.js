import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar nav navbar-expand-lg navbar-dark bg-dark ps-5">
                <div className="container ps-5 mt-2">
                    <a className="navbar-brand" href="/"><img src="/globalnav_apple.svg" alt="img" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-4">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Store</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/">Mac</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">iPad</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/">iPhone</a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="/">Watch</a>
                            </li> <li className="nav-item mx-4">
                                <a className="nav-link" href="/">Airpods</a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="/">TV & Home</a>
                            </li> <li className="nav-item mx-4">
                                <a className="nav-link" href="/">Only on Apple</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Accesories</a>
                            </li> <li className="nav-item mx-4">
                                <a className="nav-link" href="/">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></a>
                            </li>
                            <li className="nav-item mx-2 ">
                                <a className="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;