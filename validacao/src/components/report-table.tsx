import { ItemReport } from "./types";
import Table from "./table";

interface ReportTableProps {
  content: ItemReport[];
}

export default function ReportTable({ content }: ReportTableProps) {
  const header = [
    "Nome",
    "CPF",
    "Cód. Banco",
    "Banco",
    "Agência",
    "Conta",
    "Valor",
  ];

  return (
    <div className="mb-5">
      {content.map((item, index) => (
        <Table
          header={header}
          title={item.projeto}
          content={item.discentes}
          key={index}
        />
      ))}
    </div>
  );
}
