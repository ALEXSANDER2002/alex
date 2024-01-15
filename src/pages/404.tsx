import Head from "next/head";
import Image from "next/image";
// import { getFunction } from "../pages/api/auth/[...nextauth]";
import Button from "@/components/button";
import Link from "next/link";
import axios from "axios";
import http from "../http";
// import { Navigate } from "react-router-dom";

const handleAPI = async () => {
  try {
    const response = await http.post("/batches/degrees-file", {});
    console.log("Cadastro bem-sucedido:", response.data);
    alert("Cadastro realizado com sucesso");
    // Navigate("/diploma");
  } catch (error) {
    console.error("Erro no cadastro:"); //, error.response.data.mensagem);
    alert("Erro ao realizar cadastro. "); // + error.response.data.mensagem);
  }
};

export default function Diploma() {
  // const btnGetFuctiononClick = () => {
  //   getFunction("batches/degrees-file")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  //   if (axios.isAxiosError(error) && error.response?.status === 404) {
  //     console.log("Recurso não encontrado");
  //     // Trate a resposta 404 aqui conforme necessário
  //   } else {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Head>
        <title>diploma</title>
      </Head>
      <main className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="alec text-center">
              <p className="text-up-04 text-semi-bold my-3">
                Documento válido e emitido pela UNIFESSPA!
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3">
                {/* Adicionei a classe 'mb-3' para adicionar margem inferior ao botão */}
                <div className="card-footer d-flex align-items-center justify-content-center">
                  <a
                    href=""
                    className="butao3"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-1x fa-magnifying-glass" /> Visualizar
                    Documento
                    <button className="butao3" onClick={handleAPI}></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
