export type Content = Record<string, string>;

export type ItemSelect = {
  value: string;
  label: string;
};

export type ItemReport = {
  projeto: string;
  discentes: Discente[];
};

export type Discente = {
  nome: string;
  cpf: string;
  codBanco: string;
  banco: string;
  agencia: string;
  conta: string;
  valor: string;
};

export type Edital = {
  id: string;
  descricao: string;
};

export function TimeStamp() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
}
