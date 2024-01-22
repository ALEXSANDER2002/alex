import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "./button";
import { MeuComponente } from "./script";
import http from "../http.js";

export default function Header() {
  const links = [
    {
      name: "UNIFESSPA",
      href: "https://www.unifesspa.edu.br",
      title: "Site da UNIFESSPA",
      idx: "divinfo14",
    },
    {
      name: "CRCA",
      href: "https://crca.unifesspa.edu.br/equipe-e-contatos.html",
      title: "SITE DO CRCA",
      idx: "divinfo23",
    },
  ];

  const icons = [
    {
      icon: "home",
      name: "Página inicial",
      url: "/",
      idx: "divinfo24",
      idp: "divinfo44"
    },
    {
      icon: "headset",
      name: "Abrir um chamado",
      url: "https://dashboard.unifesspa.edu.br/",
      idx: "divinfo25",
      idp: "divinfo45"
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

  const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [hasContrasteClass, setHasContrasteClass] = useState(false);
  const bodyStyle = {
    fontSize: `${fontSize}px`,
    transition: "font-size 0.3s ease-in-out",
    backgroundColor: contrast ? "white" : "white",
    color: contrast ? "white" : "white",
  };

  const toggleContrast = () => {
    MeuComponente();
    setContrast((prevContrast) => !prevContrast);
  };

  const changeFontSize = (action) => {
    setFontSize((prevFontSize) => {
      const newSize =
        action === "increase" ? prevFontSize * 1.1 : prevFontSize * 0.9;
      return newSize;
    });
  };
  const App = () => {
    const [contrasteAtivado, setContrasteAtivado] = useState(false);

    const mudarContraste = () => {
      setContrasteAtivado(!contrasteAtivado);
    };

    return (
      <div>
        <button onClick={mudarContraste}>Ativar Contraste</button>
        <div
          id="contraste"
          className={`alec ${contrasteAtivado ? "contrasteAtivo" : ""}`}
        >
          Conteúdo com fundo amarelo
        </div>
        <div
          id="contraste"
          className={` alec  ${contrasteAtivado ? "contrasteAtivo" : ""}`}
        >
          Outro conteúdo com fundo amarelo
        </div>
      </div>
    );
  };

  const toggleContrasteClass = () => {
    MeuComponente();
    setHasContrasteClass((prevHasContrasteClass) => !prevHasContrasteClass);
  };
  const MeuComponente = () => {
    const [ativo, setAtivo] = useState(false);
  }

  useEffect(() => {
    document.body.classList.toggle("contraste3", hasContrasteClass);
  }, [hasContrasteClass]);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.backgroundColor = contrast ? "black" : "white";
    document.body.style.color = contrast ? "white" : "black";
  }, [contrast, fontSize]);

  useEffect(() => {
    document.body.style.fontSize = `${bodyStyle}px`;
    document.body.style.backgroundColor = contrast ? "black" : "white";
    document.body.style.color = contrast ? "white" : "black";
  }, [contrast, fontSize]);
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

  useEffect(() => {
    if (document.body.style.backgroundColor.match('black')) {
      MeuComponente(); 
    }
  }, []);

  return (
    <header
      id="divinfo3"
      className={`br-header sticky `}
      data-sticky="data-sticky"
    >
      <div className="container-lg ">
        <div className="header-top ">
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
              <div id="divinfo12" className="br-list">
                <div  className="header">
                  <div  className="title">Acesso Rápido</div>
                </div>

                {links.map((item, index) => (
                  <a
                    key={index}
                    id={item.idx}
                    className="br-item "
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
                <i   className="fas fa-th" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Funcionalidades do Sistema</div>
                </div>

                {icons.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    id={item.idx}
                    className="design-clean "
                  >
                    <Button
                      id={item.idp}
                      className="circle "
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
                {/* Adicionei os botões de acessibilidade */}
                <button
                  
                  className="accessibility-btn"
                  onClick={toggleContrast}
                  aria-label="Alternar Contraste"
                >
                  <i id= "divinfo36" class ="fa-solid fa-circle-half-stroke"></i>
                </button>
                <button
                  id="divinfo35"
                  className="accessibility-btn"
                  onClick={() => changeFontSize("increase")}
                  aria-label="Aumentar Fonte"
                >
                  A+
                </button>
                <button
                  id="divinfo34"
                  className="accessibility-btn"
                  onClick={() => changeFontSize("decrease")}
                  aria-label="Diminuir Fonte"
                >
                  A-
                </button>
              </div>

              <div className="header-avatar"></div>
            </div>
          </div>
        </div>
        <div className="">
          <div id="divinfo15" className="header-menu">
            <div className="header-info">
              <div className="header-title">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
