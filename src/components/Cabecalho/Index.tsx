import { Link, useLocation } from "react-router-dom"; 

import logoIema from "../../assets/logoIEMA02-3.png";
import loginEntrar from "../../assets/login02.png";
import "./styles.css";

const Cabecalho = () => {
  const location = useLocation();
  const rotaPublica = "/painel-publico";

  // Função para decidir se o link deve ser uma âncora ou um caminho real
  const formatarLink = (id: string) => {
    return location.pathname === rotaPublica ? `#${id}` : `${rotaPublica}#${id}`;
  };

  return (
    <div className="container-cabecalho">
      <header className="cabecalho-principal">
        <nav className="menu-superior">
          <div className="logo-container">
            {/* O Logo agora sempre volta para a Home (Painel) */}
            <Link to={rotaPublica}>
              <img src={logoIema} alt="Logo IEMA" className="logo-iema" />
            </Link>
          </div>

          <div className="links-navegacao">
            
            <Link to={rotaPublica}>Home</Link>
            
            {/* O href com /#id força o navegador a voltar para a home e depois procurar o ID */}
            <a href={formatarLink("noticias")}>Notícias</a>
            <a href={formatarLink("parcerias")}>Conexões</a>
            <a href={formatarLink("depoimentos")}>Depoimentos</a>

            <button className="botao-entrar-header bt-entrar" aria-label="Entrar" onClick={() => window.location.href = "/loginAlunoIEMA"}>
              <img src={loginEntrar} alt="Ícone de entrar" className="bt-entrar-icone" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Cabecalho;