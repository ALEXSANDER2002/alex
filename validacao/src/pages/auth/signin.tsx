import Button from "@/components/button";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Head from "next/head";
import Link from "next/link";


export default function Login({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>

        <title>Entrar</title>
      </Head>
      <main>
        <div className="row">
          <div className="col text-center align-items-center justify-content-center">
            <div className="text-support-03">
              <p className="text-up-06 text-semi-bold my-3"></p>
            </div>
            <div className="text-secondary-06">
              <p className="text-up-03 text-medium my-3">

              </p>
            </div>
            <p className="my-3">

            </p>

  <div id="area-principal">
     <p class="text-center alec">Bem-vindo ao <strong>Validador de documentos</strong> da UNIFESSPA. Este serviço propõe-se a confirmar a validade dos documentos acadêmicos emitidos.
Para validar um documento, informe abaixo o código de validação que se encontra no seu versos</p>


      <p class="felipe"></p>
      <p class="felipe3"></p>
      <p class="felipe2"></p>
      <div class="card text-center">
        <div class=" alex29"><h6>Dados para Validação</h6></div>
        <div class="card-body alex25">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <a href="#" class="alex33"></a>
       <div><p class="felipe61">Código  Verificação</p></div>

    <div></div>
   <div class="alek2"></div>



         <input class="felipe63" type="text" placeholder="Digite aqui"></input>

        </div>


        <div class="card-footer alex60 text-body-secondary">　</div>
      </div>
    </div>

            <div className="alejj2">
              <div className="alejj2">
                <div className="alejj2">
                  {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                         <Link href="404.tsx" className="alejj2">
                    <Button
                      icon=""
                      label=""
                      type=""></Button>
                      <button class="alejj3">
                        d
    <i class="lock-icon"></i> Validar Documento
</button>


                  </Link>
                    </div>

                  ))}
                  <div><img class='imagem2'
                        src="cadeado.png"
                        alt="Descrição da Imagem"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}




