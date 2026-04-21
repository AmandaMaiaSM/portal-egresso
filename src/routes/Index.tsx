import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Páginas públicas
import LayoutPortalBublico from "../layout/LayoutPortalBublico/Index";
import TodasNoticias from "../pages/Portal/TodasNoticias/Index";
import DetalheNoticia from "../pages/Portal/DetalheNoticia/Index";
import TodasParceiras from "../pages/Portal/TodasParceiras/Index";
import TodosDepoimentos from "../pages/Portal/TodosDepoimentos/Index";
import LoginAluno from "../pages/Alunos/Login/Index";

// Layout do aluno e suas páginas internas
import LayoutPortalAluno from "../layout/LayoutPortalAluno/Index";
// Páginas internas do aluno
import PerfilAluno from "../pages/Alunos/PerfilAluno/Index";
import VagasCompativeis from "../pages/Alunos/VagasCompativeis/Index";
import MinhasCandidaturas from "../pages/Alunos/MinhasCandidaturas/Index";
import Curriculo from "../pages/Alunos/Curriculo/Index";
import ConfiguracaoAluno from "../pages/Alunos/ConfiguracaoAluno/Index";
import CadastroAluno from "../pages/Alunos/CadastroAlunoLogin/Index";
import EsqueciMinhaSenhaAluno from "../pages/Alunos/EsqueciMinhaSenhaAluno/Index";
import Trilhasdecursos from "../pages/Alunos/Trilhasdecursos/Index";
import ListaTrilhas from "../pages/Alunos/ListaTrilhasNova/Index";
import DetalhesCurso from "../pages/Alunos/DetalhesCursoTrilha/Index";

//Paginas para empresa/parceiros
import LayoutPortalEmpresa from "../layout/LayoutPortalEmpresa/Index";
import DashboardEmpresa from "../pages/Parceiras/DashboardEmpresa/Index";
import GestaodeVagas from "../pages/Parceiras/GestaodeVagas/Index";
import TalentosCandidatos from "../pages/Parceiras/TalentosCandidatos/Index";
import HistoricoRelatorios from "../pages/Parceiras/HistoricoRelatorios/Index";
import ConfiguracaoEmpresa from "../pages/Parceiras/ConfiguracaoEmpresa/Index";


// Layout do administrador e suas páginas internas
import LayoutAdmin from "../layout/LayoutAdmin/Index";
import DashboardAdmin from "../pages/Admin/DashboardAdmin/Index";
import GestaodeDepoimentos from "../pages/Admin/GestaodeDepoimentos/Index";
import CentralNoticias from "../pages/Admin/CentraldeNoticias/Index";
import PainelDeConexoes from "../pages/Admin/PaineldeConexoes/Index";
import SlidesAdmin from "../pages/Admin/ConfiguracaoSlide/Index";
import InsercaoDeEmpresas from "../pages/Admin/InsercaodeEmpresas/Index";
import GestaodeAlunos from "../pages/Admin/GestaodeAlunos/Index";
import DeletarConexoes from "../pages/Admin/DeletarConexao/Index";
import CadastrarUnidade from "../pages/Admin/CadastratrarUnidade/Index";
import DiretoresUnidades from "../pages/Admin/DiretoreseUnidades/Index";
import CadastrarTrilhasCursos from "../pages/Admin/CadastrarTrilhasCursos/Index";
import TrilhasCadastradasAdmin from "../pages/Admin/TrilhasCadastradasAdmin/Index"
import ConfiguracaoPortal  from "../pages/Admin/ConfiguracoesPortal/Index";






export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CAMPO PÚBLICO */}
        <Route path="/" element={<Navigate to="/painel-publico" replace />} />
        <Route path="/painel-publico" element={<LayoutPortalBublico />} />
        <Route path="/painel-publico/noticias" element={<TodasNoticias />} />
        <Route path="/painel-publico/parceiras" element={<TodasParceiras />} />
        <Route path="/painel-publico/noticia/:id" element={<DetalheNoticia />} />
        <Route path="/painel-publico/depoimentosAlunos" element={<TodosDepoimentos />} />
      

        {/* LOGIN */}
        <Route path="/loginAlunoIEMA" element={<LoginAluno />} />
        <Route path="/cadastroAlunoIEMA" element={<CadastroAluno />} />
        <Route path="/esqueci-minha-senha-aluno" element={<EsqueciMinhaSenhaAluno />} />

        {/* CAMPO ALUNO*/}
        <Route path="/painelAlunoIEMA" element={<LayoutPortalAluno />}>
          {/* rotas filhas */}
          <Route index element={<PerfilAluno />} /> {/* Rota padrão para /painelAlunoIEMA */}
          <Route path="perfil" element={<PerfilAluno />} />
          <Route path="VagasCompativeis" element={<VagasCompativeis />} />
          <Route path="MinhasCandidaturas" element={<MinhasCandidaturas />} />
          <Route path="Curriculo" element={<Curriculo />} />
          <Route path="ConfiguracaoAluno" element={<ConfiguracaoAluno />} />
          <Route path="Trilhasdecursos" element={<Trilhasdecursos />} />
          <Route path="Trilhasnovas" element={<ListaTrilhas tipo="novas" />} />
          <Route path="Minhastrilhas" element={<ListaTrilhas tipo="realizadas" />} />
          <Route path="DetalhesCursoTrilha" element={<Navigate to="/painelAlunoIEMA/DetalhesCursoTrilha/html-basico" replace />} />
          <Route path="DetalhesCursoTrilha/:id" element={<DetalhesCurso />} />
        </Route>
        

        {/* EMPRESA */}
        <Route path="/painel-empresa" element={<LayoutPortalEmpresa />}>
          <Route index element={<DashboardEmpresa />} />
          {/* rotas filhas */}
          <Route path="dashboard" element={<DashboardEmpresa />} />
          <Route path="gestao-vagas" element={<GestaodeVagas />} />
          <Route path="Candidatostalentos" element={<TalentosCandidatos />} />
          <Route path="historico-relatorios" element={<HistoricoRelatorios />} />
          <Route path="configuracao-empresa" element={<ConfiguracaoEmpresa />} />
            
        </Route> 
        
        {/*Campo administrador*/}
        <Route path="/painel-admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="gestao-depoimentos" element={<GestaodeDepoimentos />} />
          <Route path="central-noticias" element={<CentralNoticias />} />
          <Route path="painel-conexoes" element={<PainelDeConexoes />} />
          <Route path="painel-slides" element={<SlidesAdmin />} />
          <Route path="insercao-empresas" element={<InsercaoDeEmpresas />} />
          <Route path="gestao-alunos" element={<GestaodeAlunos />} />
          <Route path="deletar-conexoes" element={<DeletarConexoes />} />
          <Route path="cadastrar-unidades" element={<CadastrarUnidade />} />
          <Route path="diretores-unidades" element={<DiretoresUnidades />} />
          <Route path="cadastrar-trilhas" element={<CadastrarTrilhasCursos/>}/>
          <Route path="trilhasAdmin-cadastradas" element={<TrilhasCadastradasAdmin/>}/>
          <Route path="configuracoes-portal" element={<ConfiguracaoPortal />} />
        </Route>
        
        
        {/* 404 */}
        <Route path="*" element={<h1>Página não encontrada (404)</h1>} />

      </Routes>
    </BrowserRouter>
  );
}