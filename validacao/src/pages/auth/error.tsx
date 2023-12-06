import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import image404 from "../../../public/erro404.png";
import image403 from "../../../public/erro403.png";
import image500 from "../../../public/erro500.png";
import Button from "@/components/button";
import Link from "next/link";

export default function Error() {
  const router = useRouter();
  const error = router.query.error;

  let errorMessage = "Alguma coisa deu errado!";
  let title = "Erro!";
  let image = image404;

  if (error === "AccessDenied") {
    image = image403;
    title = "Acesso Negado!";
    errorMessage = "Você não tem permissão para acessar esta página!";
  }

  if (error === "Configuration") {
    image = image500;
    title = "Estamos constrangidos em te ver por aqui!";
    errorMessage =
      "Estamos enfrentando alguns problemas. Por favor tente novamente mais tarde!";
  }

  return (
    <>
      {errorMessage && (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <main>
            <div className="row">
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <div className="mt-4 mt-sm-0">
                  <Image
                    className="imagem-teste"
                    src={image}
                    alt="Imagem de Erro"
                    priority
                  />
                </div>
              </div>
              <div className="col">
                <div className="text-support-03 text-center justify-content-center">
                  <p className="text-up-06 text-semi-bold my-3">{title}</p>
                </div>
                <div className="text-secondary-06 text-center justify-content-center">
                  <p className="text-up-03 text-medium my-3">{errorMessage}</p>
                  <Link href="/" className="design-clean">
                    <Button
                      icon="home"
                      label="Ir para Página Principal"
                      type="secondary"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );

  return <div>{errorMessage && <div>{errorMessage}</div>}</div>;
}
