import Link from "next/link";
import { useRouter } from "next/router";

export default function Breadcrumb() {
  const router = useRouter();
  const path = router.pathname;
  const routes = path.split("/").filter((route) => route !== "");

  const titleMap: { [key: string]: string } = {
    error: "Erro",
    signin: "",
    profile: "Perfil",
    relatorio: "Relatório",
    "[id]": "Resultado",
    404: "",
  };

  if (router.pathname === "/") {
    return null;
  }

  return (
    <div className="br-breadcrumb">
      <ul className="crumb-list">
        <li className="crumb home">
          <Link className="br-button circle" href="/">
            <span className="sr-only">Página Inicial</span>
            <i id="divinfo42"  className="fas fa-home"></i>
          </Link>
        </li>
        {routes.map((route, index) =>
          index === routes.length - 1 ? (
            <li className="crumb" data-active="active" key={index}>
              <i className="icon fas fa-chevron-right"></i>
              <span>{titleMap[route]}</span>
            </li>
          ) : route === "auth" ? null : (
            <li className="crumb" key={index}>
              <i className="icon fas fa-chevron-right"></i>
              <Link href={`/${route}`}>{titleMap[route]}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
