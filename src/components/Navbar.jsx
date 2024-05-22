import React from 'react'
import Button from './Button';


function Navbar() {
  return (
    <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <div>
            <a class="navbar-brand" href="/#">
                Logo
            </a>
        </div>
        <div class="d-flex ">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-4 mb-lg-0 fs-5">
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Karts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Circuitos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Ubicación y Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class='d-flex justify-content-end'>
                <Button name='Sing in' />
                <Button name='Log in' />
            </div>
        </div>
    </div>
</header>

  );
}

export default Navbar;

/*<div class='div-center'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Karts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Circuitos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Ubicación y Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>*/