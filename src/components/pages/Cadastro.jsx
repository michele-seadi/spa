import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <main style={{ backgroundColor: "#357599" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="signup-form">
          <form action="" className="mt-5 border p-4 bg-light shadow">
            <h4 className="mb-5 text-dark">Crie sua conta</h4>
            <div className="row">
              <div className="mb-3 col-md-12">
                <label>
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Digite seu Email"
                />
              </div>
              <div className="mb-3 col-md-12">
                <label>
                  Senha<span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="mb-3 col-md-12">
                <label>
                  Confirme sua senha<span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  className="form-control"
                  placeholder="Confirme sua senha"
                />
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary float-end">
                  Cadastre-se
                </button>
              </div>
            </div>
          </form>
          <p className="text-center mt-3 text-dark">
            Se já possui uma conta,
            <Link to="/" className="text-dark">
              Entre aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</main>
  );
}

export default Cadastro;
