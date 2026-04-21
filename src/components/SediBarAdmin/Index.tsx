import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./Styles.css";

type MenuLink = {
  path: string;
  label: string;
};

type MenuSection = {
  titulo: string;
  itens: MenuLink[];
};

type MenuEntry = MenuLink | MenuSection;

type SideBarAdminProps = {
  menuAberto: boolean;
  setMenuAberto: (aberto: boolean) => void;
};

export default function SideBarAdmin({ menuAberto, setMenuAberto }: SideBarAdminProps) {

  const location = useLocation();
  const [secaoAberta, setSecaoAberta] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/")
      ? "nav-item active"
      : "nav-item";
  };

  const toggleSecao = (titulo: string) => {
    setSecaoAberta(secaoAberta === titulo ? null : titulo);
  };

  const menuAdmin: MenuEntry[] = [
    {
      path: "/painel-admin/dashboard",
      label: "Dashboard"
    },
    {
      titulo: "Seção de Controle do Portal",
      itens: [
        { path: "/painel-admin/gestao-depoimentos", label: "Gestão de Depoimentos" },
        { path: "/painel-admin/central-noticias", label: "Central de Notícias" },
        { path: "/painel-admin/painel-conexoes", label: "Painel de Conexões" },
        { path: "/painel-admin/painel-slides", label: "Configuração de Slides" }
      ]
    },
    {
      titulo: "Gestão de Acessos e Usuários",
      itens: [
        { path: "/painel-admin/insercao-empresas", label: "Inserção de Empresas" },
        { path: "/painel-admin/gestao-alunos", label: "Gestão de Alunos/Egressos" },
        { path: "/painel-admin/deletar-conexoes", label: "Deletar Conexões" }
      ]
    },
    {
      titulo: "Expansão de Unidades IEMA",
      itens: [
        { path: "/painel-admin/cadastrar-unidades", label: "Cadastrar novas unidades" },
        { path: "/painel-admin/diretores-unidades", label: "Diretores e Unidades" }
      ]
    },
    {
      titulo: "Adcionando trilhas ",
      itens:[
        { path: "/painel-admin/cadastrar-trilhas", label: "Cadastrar Trilhas"},
        { path: "/painel-admin/trilhasAdmin-cadastradas", label: "Trilhas Cadastradas"}
      ]

    },
    {
      titulo: "Configuração",
      itens: [
        { path: "/painel-admin/configuracoes-portal", label: "Configurações" }
      ]
    }
  ];

  return (
    <aside className={`sidebar-admin ${menuAberto ? "" : "fechada"}`}>

      <div className="sidebar-header">
        <button
          type="button"
          className="btn-toggle-sidebar"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          title={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`toggle-icon ${menuAberto ? "aberto" : "fechado"}`}
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h2 className="sidebar-title">Portal Admin</h2>
       
      </div>

      <nav className="sidebar-nav">

        {menuAdmin.map((secao, index) => (

          <div key={index} className="menu-group">

            {"path" in secao && (
              <Link
                to={secao.path}
                className={isActive(secao.path)}
              >
                {secao.label}
              </Link>
            )}

            {"itens" in secao && (
              <>
                <button
                  className="titulo-secao"
                  onClick={() => toggleSecao(secao.titulo)}
                >
                  {secao.titulo}
                </button>

                {secaoAberta === secao.titulo && (

                  <div className="submenu">

                    {secao.itens.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={isActive(item.path)}
                      >
                        {item.label}
                      </Link>
                    ))}

                  </div>

                )}
              </>
            )}

          </div>

        ))}

      </nav>

      <div className="sidebar-footer">
        <Link to="/login" className="nav-item">
          Sair
        </Link>
      </div>

    </aside>
  );
}