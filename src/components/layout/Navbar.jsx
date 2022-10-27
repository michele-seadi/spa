import { Link } from "react-router-dom";
import logo_transparent from "../../img/logo_transparent.png";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark"
      style={{ backgroundColor: "#295872" }}
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo_transparent} alt="logo-zetta" width={75} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                Cursos
              </Link>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            {/*Modal para Login*/}
            <Button variant="primary" onClick={handleShow}>
        Entrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entrar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      {/* Form*/}
      <form action="">
        <div className="modal-header">
          <h5 className="modal-title">Já é nosso aluno?</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="Email">
              Email do usuário<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="Email"
              className="form-control"
              id="Email"
              placeholder="Digite o email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password">
              Senha do usuário<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="Password"
              placeholder="Digite a senha"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="remember"
              required=""
            />
            <label className="form-check-label" htmlFor="remember">
              Lembre de mim/
            </label>
            <Link href="#" className="float-end">
              Esqueceu a senha
            </Link>
          </div>
        </div>
        <div className="modal-footer pt-4">
          <button
            type="button"
            className="btn mx-auto w-100"
            style={{ backgroundColor: "#4292bf" }}
          >
            Acessar
          </button>
        </div>
        <p className="text-center">
          Ainda não possui conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </form>
    </div>
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           Entrar
          </Button>
        </Modal.Footer>
      </Modal>
            <Button href="/cadastro" type="button" className="btn btn-primary">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
