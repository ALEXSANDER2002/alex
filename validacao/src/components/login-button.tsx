import { useSession, signIn, signOut } from "next-auth/react";
import { useRef, useState, useEffect } from "react";
import Button from "./button";

export default function LoginButton() {
  const { data: session } = useSession();

  const [opened, setOpened] = useState(false);

  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const menu = menuRef.current;
      if (menu && !menu.contains(target)) {
        if (target.classList.contains("menu")) {
          setOpened(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (session) {
    return (
      <aside
        id="sso-status-bar"
        className={`sso-status-bar signed-in ${
          opened ? "opened-menu" : "closed-menu"
        }`}
      >
        <section className="status-indicator">
          <button
            type="button"
            className="signed-in"
            onClick={() => setOpened(!opened)}
            ref={menuRef}
          >
            <img
              id="account-picture-icon"
              className="account-picture-icon"
              alt="Ícone de foto do usuário logado no gov.br"
              src={session?.user?.image || ""}
            />
            <span className="account-block-name">
              Olá,{" "}
              <span id="account-first-name" className="account-first-name">
                {session?.user?.name}
              </span>
            </span>
          </button>
        </section>
        <section id="menu" className="menu">
          <p className="account-name-greeting">
            Olá,{" "}
            <span id="account-name" className="account-name">
              {session.user?.name}
            </span>
          </p>
          <p id="account-email" className="account-email">
            {session.user?.email}
          </p>
          <section id="custom-links" className="custom-links">
            <slot></slot>
          </section>
          <section className="actions">
            <button type="button" onClick={() => signOut()}>
              Sair da conta
            </button>
          </section>
        </section>
      </aside>
    );
  }

  return (
    <Button
      className="br-sign-in"
      density="small"
      data-trigger="login"
      icon="user"
      label="Entrar"
      labelClassName="d-sm-inline"
      onClick={() => signIn()}
    />
  );
}
