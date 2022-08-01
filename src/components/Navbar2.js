import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg nav2 sticky-top border border-1 rounded-0">
                <div class="container my-2">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span class="navbar-toggler-icon"></span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                        </svg>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand fw-semibold fs-5 ms-4 p-2" href="/">iPhone 12</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 p-4">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2" href="/">Switching to iPhone</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='/'>Tech Specs</a>
                            </li>
                            <li class="nav-item">
                                <span class="badge rounded-pill text-bg-primary mx-1 py-0 cursor-pointer"><p className='my-1 mx-1'>Buy</p></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar2;