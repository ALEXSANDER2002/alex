import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NotFoundPage from "../diploma";
import { ItemReport } from "@/components/types";
import ReportTable from "@/components/report-table";
import XLSX from "@/components/xlsx";
import { TimeStamp } from "@/components/types";
import Button from "@/components/button";
import Image from "next/image";
import image404 from "../../../public/erro404.png";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export default function Relatorio() {
  const router = useRouter();
  const id = router.query.id as string;

  const [itemReportList, setItemReportList] = useState<ItemReport[] | null>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const header = [
    { label: "Projeto", value: "projeto" },
    { label: "Nome", value: "nome" },
    { label: "CPF", value: "cpf" },
    { label: "Cód. Banco", value: "codBanco" },
    { label: "Banco", value: "banco" },
    { label: "Agência", value: "agencia" },
    { label: "Conta", value: "conta" },
    { label: "Valor", value: "valor" },
  ];

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetch(`${apiUrl}/relatorio/projeto/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Requisição inválida!");
          }
          return res.json();
        })
        .then((data) => {
          setItemReportList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setItemReportList(null);
        });
    }
  }, [id, apiUrl]);

  if (!itemReportList) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {isLoading ? (
        <div>Carregando!</div>
      ) : (
        <>
          {itemReportList.length > 0 ? (
            <ReportTable content={itemReportList} />
          ) : (
            <div className="row">
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <div className="mt-4 mt-sm-0">
                  <Image
                    className="imagem-teste"
                    src={image404}
                    alt="Imagem de Erro"
                    priority
                  />
                </div>
              </div>
              <div className="col text-center text-sm-left">
                <div className="text-secondary-06">
                  <p className="text-up-03 text-medium my-3">
                    Não encontramos o resultado que você está buscando!
                  </p>
                </div>
                <p className="my-3">
                  Talvez o edital que você selecionou ainda não esteja vinculado
                  a nenhum projeto ou quem sabe nós tenhamos cometido uma falha
                  por aqui.
                </p>
              </div>
            </div>
          )}
          <div className="row my-5 text-center justify-content-center">
            <div
              className={`col${
                itemReportList.length > 0 ? "-sm-2" : ""
              } mt-2 mt-lg-0`}
            >
              <Link href="/relatorio" className="design-clean">
                <Button
                  icon="arrow-left"
                  label="Voltar"
                  type="secondary"
                  block
                />
              </Link>
            </div>
            {itemReportList.length > 0 && (
              <div className="col-sm-2 mt-2 mt-lg-0">
                <Button
                  icon="download"
                  label="Baixar Relatório"
                  type="primary"
                  onClick={() =>
                    XLSX(
                      header,
                      itemReportList,
                      `relatorio-folha-de-pagamento_edital-${id}_${TimeStamp()}`
                    )
                  }
                  block
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }
  return {
    props: { session },
  };
};
