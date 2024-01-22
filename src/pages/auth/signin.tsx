import Button from "@/components/button";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Head from "next/head";
import Link from "next/link";


export default function Login() {
  // {
  //   providers,
  // }: InferGetServerSidePropsType<typeof getServerSideProps>
  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>
      <main className="container">
        <div id="divinfo5" className="text-center text-text alec  ">
          Bem-vindo ao <strong>Validador de documentos</strong> emitidos pela
          UNIFESSPA. Este serviço propõe-se a confirmar a validade dos
          documentos acadêmicos emitidos. Para validar um documento, informe
          abaixo o código de validação que se encontra no seu verso:
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card text-center max">
              <div id="divinfo6" className="card-header alex23 ">
                <h6>Dados para Validação</h6>
              </div>
              <form action="../diploma" method="post">
                <div id="divinfo10" className="card-body text-center alex87 ">
                  <div  className="row">
                    <div  className="col-md-12">
                      <div  className="form-group ">
                        <label id="divinfo9" htmlFor="codigo">Código de Verificação:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="codigo"
                          name="codigo"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="divinfo7"
                  className="card-footer alex56 d-flex align-items-center justify-content-center "
                >
                  <button
                    type="submit"
                    id="divinfo37"
                    className="butao2"
                    value="redirecionar"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-1x fa-lock" /> Validar Documento
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   const providers = await getProviders();

//   return {
//     props: { providers: providers ?? [] },
//   };
// }
