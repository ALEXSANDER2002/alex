import Link from "next/link";
import Button from "./button";
import { useRef, useState, useEffect } from "react";
import LoginButton from "./login-button";

export default function Header() {
  const links = [
    {
      name: "UNIFESSPA",
      href: "https://www.unifesspa.edu.br",
      title: "Site da UNIFESSPA",
    },
    {
      name: "CRCA",
      href: "https://crca.unifesspa.edu.br/equipe-e-contatos.html",
      title: "SITE DO CRCA",
    },
  ];

  const icons = [
    {
      icon: "home",
      name: "Página inicial",
      url: "/",
    },
    {
      icon: "headset",
      name: "Abrir um chamado",
      url: "https://dashboard.unifesspa.edu.br/",
    },
  ];

  const title = "Validação de Documentos de Diploma";
  const signature = "CRCA";

  const image = {
    src: "/logo-horizontal.png",
    alt: "Logo da UNIFESPA",
  };

  const linkDropdownRef = useRef<HTMLButtonElement>(null);
  const iconDropdownRef = useRef<HTMLButtonElement>(null);

  const [isLinkActive, setLinkActive] = useState(false);
  const [isIconActive, setIconActive] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const linkDropdown = linkDropdownRef.current;
      const iconDropdown = iconDropdownRef.current;
      if (linkDropdown && !linkDropdown.contains(target)) {
        if (
          target.classList.contains("br-list") ||
          !target.closest(".br-list")
        ) {
          setLinkActive(false);
        }
      }
      if (iconDropdown && !iconDropdown.contains(target)) {
        if (
          target.classList.contains("br-list") ||
          !target.closest(".br-list")
        ) {
          setIconActive(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`br-header sticky`} data-sticky="data-sticky">
      <div className="container-lg">
        <div className="header-top">
          <div className="header-logo">
            <img src={image.src} alt={image.alt} />
            <span className="br-divider vertical"></span>
            <div className="header-sign">{signature}</div>
          </div>
          <div className="header-actions">
            <div
              className={`header-links dropdown ${isLinkActive ? "show" : ""}`}
            >
              <button
                className={`br-button circle small ${
                  isLinkActive ? "active" : ""
                }`}
                type="button"
                ref={linkDropdownRef}
                data-toggle="dropdown"
                aria-label="Abrir Acesso Rápido"
                onClick={() => setLinkActive(!isLinkActive)}
              >
                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Acesso Rápido</div>
                </div>

                {links.map((item, index) => (
                  <a
                    key={index}
                    className="br-item"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <span className="br-divider vertical mx-half mx-sm-1 "></span>
            <div
              className={`header-functions dropdown ${
                isIconActive ? "show" : ""
              }`}
            >
              <button
                className={`br-button circle small ${
                  isIconActive ? "active" : ""
                }`}
                type="button"
                ref={iconDropdownRef}
                data-toggle="dropdown"
                aria-label="Abrir Funcionalidades do Sistema"
                onClick={() => setIconActive(!isIconActive)}
              >
                <i className="fas fa-th" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Funcionalidades do Sistema</div>
                </div>

                {icons.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className="br-item design-clean"
                  >
                    <Button
                      className="circle"
                      aria-label={item.name}
                      icon={item.icon}
                      label={item.name}
                      labelClassName="text"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="header-login">
              <div className="header-sign-in">

              </div>
              <div className="header-avatar"></div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="header-menu">
            <div className="header-info">
              <div className="header-title">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
