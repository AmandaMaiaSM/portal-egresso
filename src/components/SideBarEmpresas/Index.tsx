import { useLocation, Link } from "react-router-dom";

import btMenu from "../../assets/bt-menu.png";
import btDashboard from "../../assets/dashboard.png";
import btVagas from "../../assets/admGettaodeVagas.png";
import btTalentos from "../../assets/Cadidatotalento.png";
import btRelatorios from "../../assets/relatorio.png";
import btConfiguracoes from "../../assets/configuracao.png";
import btSair from "../../assets/SairDesligar.png";


import "./Styles.css";

interface SideBarEmpresaProps {
  menuAberto: boolean;
  setMenuAberto: (aberto: boolean) => void;
}

export default function SideBarEmpresa({
  menuAberto,
  setMenuAberto,
}: SideBarEmpresaProps) {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/")
      ? "nav-item active"
      : "nav-item";

  return (
    <aside className={`sidebar-aluno ${menuAberto ? "" : "fechada"}`}>
      {/* HEADER */}
      <div className="sidebar-header">
        <img
          src={btMenu}
          alt="Menu"
          className="menu-icon"
          onClick={() => setMenuAberto(!menuAberto)}
        />
        <h2 className={!menuAberto ? "escondido" : ""}>
          Portal Empresa
        </h2>
      </div>

      {/* NAVEGAÇÃO */}
      <nav className="sidebar-nav">
        <Link
          to="/painel-empresa/dashboard"
          className={isActive("/painel-empresa/dashboard")}
        >
          <img src={btDashboard} alt="Dashboard" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>
            Dashboard
          </span>
        </Link>

        <Link
          to="/painel-empresa/gestao-vagas"
          className={isActive("/painel-empresa/gestao-vagas")}
        >
          <img src={btVagas} alt="Gestão de Vagas" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>
            Gestão de Vagas
          </span>
        </Link>

        <Link
          to="/painel-empresa/Candidatostalentos"
          className={isActive("/painel-empresa/Candidatostalentos")}
        >
          <img src={btTalentos} alt="Talentos e Candidatos" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Talentos e Candidatos
          </span>
        </Link>

        <Link
          to="/painel-empresa/historico-relatorios"
          className={isActive("/painel-empresa/historico-relatorios")}
        >
          <img src={btRelatorios} alt="Relatórios" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>
            Histórico e Relatórios
          </span>
        </Link>

        <Link
          to="/painel-empresa/configuracao-empresa"
          className={isActive("/painel-empresa/configuracao-empresa")}
        >
          <img src={btConfiguracoes} alt="Configurações" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>
            Configurações
          </span>
        </Link>

       
      </nav>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <Link to="/login-empresa" className="nav-item">
          <img src={btSair} alt="Sair" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>
            Sair
          </span>
        </Link>
      </div>
    </aside>
  );
}