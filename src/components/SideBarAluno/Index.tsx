import { useLocation, Link } from "react-router-dom";


import btMenu from "../../assets/bt-menu.png"; 
import btUsuario from "../../assets/usuario.png";
import btVagas from "../../assets/vagasCompativeis.png";
import btCandidaturas from "../../assets/minhasCadidaturas.png";
import btCurriculo from "../../assets/curriculo.png";
import btConfig from "../../assets/configuracao.png";  
import btSair from "../../assets/SairDesligar.png";
import "./Styles.css";

export default function SideBarAluno({ menuAberto, setMenuAberto }: { menuAberto: boolean; setMenuAberto: (aberto: boolean) => void }) {
  //const navigate = useNavigate();
  const location = useLocation();

  // Função para verificar se a rota está ativa
  const isActive = (path: string) => {
      return location.pathname === path || location.pathname.startsWith(path + "/") 
        ? "nav-item active" 
        : "nav-item";
    };

  return (
    
    <aside className= {`sidebar-aluno ${menuAberto ? "" : "fechada"}`}>
      <div className="sidebar-header">
        <img 
          src={btMenu} 
          alt="Menu" 
          className="menu-icon"
          onClick={() => setMenuAberto(!menuAberto)} 
        />
        <h2 className={!menuAberto ? "escondido" : ""}>Portal Aluno</h2>
      </div>

      <nav className="sidebar-nav">
        <Link to="/painelAlunoIEMA/Perfil" className={isActive("/painelAlunoIEMA/Perfil")}>
          <img src={btUsuario} alt="Perfil" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Perfil</span>
        </Link>

        
        <Link to="/painelAlunoIEMA/vagasCompativeis" className={isActive("/painelAlunoIEMA/vagasCompativeis")}>
          <img src={btVagas} alt="Vagas Compatíveis" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Vagas Compatíveis</span>
        </Link>

        <Link to="/painelAlunoIEMA/MinhasCandidaturas" className={isActive("/painelAlunoIEMA/MinhasCandidaturas")}>
          <img src={btCandidaturas} alt="Minhas Candidaturas" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Minhas Candidaturas</span>
        </Link>

        <Link to="/painelAlunoIEMA/curriculo" className={isActive("/painelAlunoIEMA/curriculo")}>
          <img src={btCurriculo} alt="Currículo" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Currículo</span>
        </Link>

        <Link to="/painelAlunoIEMA/ConfiguracaoAluno" className={isActive("/painelAlunoIEMA/ConfiguracaoAluno")}>
          <img src={btConfig} alt="Configurações" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Configurações</span>
        </Link>

      </nav>

      <div className="sidebar-footer">
        {/* Implementar lógica de logout, como limpar tokens ou redirecionar para a página de login */}
        <Link to="/loginAlunoIEMA" className="nav-item">
          <img src={btSair} alt="Sair" className="icone-nav" />
          <span className={!menuAberto ? "escondido" : ""}>Sair</span>
        </Link>
      </div>
    </aside>
  );
}