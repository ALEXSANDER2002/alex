import { useState } from "react";
import FormSelect from "@/components/select";
import { Edital, ItemSelect } from "@/components/types";
import { useEffect } from "react";
import Button from "@/components/button";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export default function FormRelatorio() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [editais, setEditais] = useState<Edital[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<ItemSelect>({
    value: "",
    label: "Selecione o edital",
  });

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/relatorio/editais`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Requisição inválida!");
        }
        return res.json();
      })
      .then((data) => {
        setEditais(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setEditais([]);
      });
  }, [apiUrl]);

  return (
    <>
      {isLoading ? (
        <div>Carregando editais!</div>
      ) : (
        <>
          <div className="row">
            <div className="col">
              <FormSelect
                data={editais}
                label="Edital"
                value={selectedOption}
                onChange={setSelectedOption}
              />
            </div>
          </div>
          <div className="row my-5 text-center justify-content-center">
            <div className="col-lg-auto">
              <Link
                href={`/relatorio/${selectedOption.value}`}
                className="design-clean"
              >
                <Button
                  icon="newspaper"
                  label="Gerar Relatório"
                  type="secondary"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
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
