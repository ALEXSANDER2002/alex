import { Content } from "./types";

interface TableProps {
  title?: string;
  header: string[];
  content: Content[];
}

export default function Table({ title, header, content }: TableProps) {
  return (
    <div className="br-table mb-5">
      <div className="table-header">
        <div className="top-bar">
          <div className="table-title text-uppercase">{title}</div>
        </div>
      </div>
      <div className="row vw-100">
        <table>
          <thead>
            <tr>
              {header.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`text-bold col-${index == 0 ? "2" : "1"}`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key) => (
                  <td key={key} className={`col-${key == "nome" ? "2" : "1"}`}>
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
