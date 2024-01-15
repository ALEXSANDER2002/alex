import xlsx, { IContent, IJsonSheet } from "json-as-xlsx";
import { ItemReport } from "./types";

type Header = {
  label: string;
  value: string;
};

interface ReportRow {
  projeto: string;
  nome: string;
  cpf: string;
  codBanco: string;
  banco: string;
  agencia: string;
  conta: string;
  valor: string;
}

const toReportRowContent = (row: ReportRow): IContent => ({
  projeto: row.projeto,
  nome: row.nome,
  cpf: row.cpf,
  codBanco: row.codBanco,
  banco: row.banco,
  agencia: row.agencia,
  conta: row.conta,
  valor: row.valor,
});

const downloadFile = (
  headers: Header[],
  data: ItemReport[],
  fileName: string
) => {
  const content = data.reduce((acc: ReportRow[], item) => {
    const rows = item.discentes.map((discente) => ({
      projeto: item.projeto,
      ...discente,
    }));
    return [...acc, ...rows];
  }, []);

  const sheetData: IJsonSheet[] = [
    {
      sheet: "Relatório",
      columns: headers.map((header) => ({
        label: header.label,
        value: header.value,
      })),
      content: content.map(toReportRowContent),
    },
  ];

  const settings = {
    fileName: fileName,
  };

  xlsx(sheetData, settings);
};

export default downloadFile;
