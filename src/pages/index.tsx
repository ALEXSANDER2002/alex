import Button from "@/components/button";
import Link from "next/link";
import Head from "next/head";
// import { Image } from "react-native";

export default function Home() {
  return (
    <>
      <main className="container ">
        <div id="divinfo" className="text-center text-text alec">
          Bem-vindo ao <strong>Validador de documentos</strong> emitidos pela
          UNIFESSPA. Este serviço propõe-se a confirmar a validade dos
          documentos emitidos pela Instituição. Para proceder com validação,
          informe o tipo de documento que deseja autenticar:
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="card text-center max">
              <div id="divinfo2" className="card-header alex23 ">
                <h6>Dados para Validação</h6>
              </div>
              <form action="./auth/signin" method="post">
                <div id="divinfo11" className="card-body text-center alex87">
                  <div className="row my-5">
                    <Link
                      href="../relatorio"
                      className="col-sm-12 col-lg-4 mb-3 "
                    >
                      <button
                        id="divinfo16"
                        type="submit"
                        name="tipo"
                        value="1"
                        className="butao "
                      >
                        <i className="fas fa-3x  fa-address-card"></i> Historico
                        <span>Acadêmico</span>
                      </button>
                    </Link>
                    <Link
                      href="../relatorio"
                      className="col-12 col-md-4 jota mb-3"
                    >
                      <button
                        id="divinfo17"
                        type="submit"
                        name="tipo"
                        value="2"
                        className="butao"
                      >
                        <i className="fas fa-3x fa-graduation-cap" /> Curriculo
                        <span>Acadêmico</span>
                      </button>
                    </Link>
                    <Link
                      href="../relatorio"
                      className="col-12 col-md-4 jota mb-3"
                    >
                      <button
                        id="divinfo18"
                        type="submit"
                        name="tipo"
                        value="3"
                        className="butao"
                      >
                        <i className="fas fa-3x fa-user-graduate" /> Diploma
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
              <div
                id="divinfo22"
                className="card-footer col-xl text-muted alex24"
              >
                {" "}
              </div>
            </div>
          </div>
        </div>
        {/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}
      </main>
    </>
  );
}
