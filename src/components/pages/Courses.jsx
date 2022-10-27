function Courses() {
  return (
    <>
      <main>
        <section>
          <div className="m-4">
            <h1 className="text-center">Cursos</h1>
            <h3 className="text-center" style={{ color: "#295872" }}>
              Muitos cursos do básico ao avançado
            </h3>
          </div>
          <div className="row ">
            <div
              className="container border my-0 p-4"
              style={{ backgroundColor: "#29587277" }}
            >
              <h5 className="mb-4" style={{ textAlign: "center" }}>
                Aqui você pode escolher o curso que mais combina com seu momento
              </h5>
              <div
                className="col-3 mx-4 mt-0"
                style={{ width: "18rem", float: "left" }}
              >
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected="">Qual o seu nível de conhecimento?</option>
                  <option value={1}>Todos</option>
                  <option value={2}>Básico</option>
                  <option value={3}>Intermediário</option>
                  <option value={4}>Avançado</option>
                </select>
              </div>
              <div
                className="col-3 mx-4 mt-0"
                style={{ width: "18rem", float: "left" }}
              >
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected="">Escolha a linguagem</option>
                  <option value={1}>Todos</option>
                  <option value={2}>Html</option>
                  <option value={3}>CSS</option>
                  <option value={4}>JavaScript</option>
                </select>
              </div>
              <div
                className="col-3 mx-4 mt-0"
                style={{ width: "18rem", float: "left" }}
              >
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected="">Cursos pagos ou gratuitos</option>
                  <option value={1}>Todos</option>
                  <option value={2}>Pagos</option>
                  <option value={3}>Gratuitos</option>
                </select>
              </div>
              <div
                className="col-3 mx-4 mt-0"
                style={{ width: "18rem", float: "left" }}
              >
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected="">Duração do Curso</option>
                  <option value={1}>Todos</option>
                  <option value={2}>Menos de uma semana</option>
                  <option value={3}>Mais de uma semana</option>
                </select>
              </div>
            </div>
          </div>
          {/*.................Lista de Cursos...............*/}
          <div
            id="container-portfolio"
            className="row border justify-content-center"
          >
            {/*Aqui são adicionados cursos por json*/}
          </div>
        </section>
      </main>
    </>
  );
}

export default Courses;
