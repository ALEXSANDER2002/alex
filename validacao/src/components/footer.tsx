export default function Footer() {
  const text = "Validação de Documentos";

  const social = {
    label: "Redes Sociais",
    networks: [
      {
        href: "https://www.facebook.com/unifesspaoficial",
        icon: "fa-facebook-f",
        description: "Facebook",
      },
      {
        href: "https://www.instagram.com/unifesspa/",
        icon: "fa-instagram",
        description: "Instagram",
      },
      {
        href: "https://twitter.com/unifesspa",
        icon: "fa-twitter",
        description: "Twitter",
      },
      {
        href: "https://www.youtube.com/@UNIFESSPAoficial/videos",
        icon: "fa-youtube",
        description: "YouTube",
      },
    ],
  };

  return (
    <div className="br-footer">
      <div className="container-lg">
        <div className="d-none d-sm-block">
          <div className="row align-items-end justify-content-between py-5">
            <div className="col">
              <div className="social-network">
                <div className="social-network-title">{social.label}</div>
                <div className="d-flex">
                  {social.networks.map((item, index) => (
                    <a
                      key={index}
                      className="br-button circle"
                      href={item.href}
                      aria-label={item.description}
                      target="_blank"
                    >
                      <i className={`fab ${item.icon}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col assigns text-right">
              <a
                className="design-clean"
                href="https://www.gov.br/acessoainformacao/pt-br"
              >
                <img
                  className="ml-4 opacity-hover"
                  src="/logo-acesso-a-educacao.png"
                  alt="Logo Acesso à Informação"
                />
              </a>
              <a className="design-clean" href="https://www.gov.br/pt-br">
                <img
                  className="ml-4 opacity-hover"
                  src="/logo-governo-federal.png"
                  alt="Logo Governo Federal"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="br-divider my-3"></span>
      <div className="container-lg">
        <div className="info">
          <div className="text-down-01 text-medium pb-1 d-flex flex-column flex-sm-row justify-content-center align-items-center">
            <span className="mr-1">{text} - Desenvolvido por: </span>
            <strong>
              <a href="https://ctic.unifesspa.edu.br">
                Centro de Tecnologia da Informação e Comunicação - CTIC
              </a>
            </strong>
          </div>
          <div className="text-down-03 text-medium pt-1 pb-3 d-flex flex-column flex-sm-row justify-content-center align-items-center">
            <div>
              Este site é protegido por reCAPTCHA e a{" "}
              <a className="pr-1" href="https://policies.google.com/privacy">
                Política de Privacidade
              </a>
            </div>
            <div>
              e os{" "}
              <a href="https://policies.google.com/terms">Termos de Serviço</a>{" "}
              do Google que se aplicam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
