import { Link } from 'react-router-dom';
import CardeCurso from '../../../components/CardCurso/Index';
import BuscadePesquisa from '../../../components/BuscadePesquisa/Index';
import './Styles.css';

// Exemplo de base de dados (Pode estar em um arquivo separado .json ou vir de API)
const DATA_NOVAS = [
  { id: 1, cursoId: 'html-basico', titulo: "Introdução ao HTML", categoria: "Frontend", nivel: "Iniciante", tempo: "8h", corCategoria: "#F2811D" },
  { id: 2, cursoId: 'html-basico', titulo: "JavaScript Básico", categoria: "Frontend", nivel: "Iniciante", tempo: "10h", corCategoria: "#F2811D" },
  { id: 3, cursoId: 'historia-maranhao', titulo: "Fundamentos de UX Design", categoria: "Mobile", nivel: "Intermediário", tempo: "12h", corCategoria: "#F2811D" },
  { id: 4, cursoId: 'historia-maranhao', titulo: "TypeScript Avançado", categoria: "Frontend", nivel: "Avançado", tempo: "15h", corCategoria: "#F2811D" },
];

const DATA_REALIZADAS = [
  { id: 101, cursoId: 'html-basico', titulo: "HTML e CSS", categoria: "Frontend", nivel: "Iniciante", tempo: "12h", progresso: 100 },
  { id: 102, cursoId: 'html-basico', titulo: "CSS Avançado", categoria: "Frontend", nivel: "Intermediário", tempo: "10h", progresso: 70 },
  { id: 103, cursoId: 'historia-maranhao', titulo: "React para Iniciantes", categoria: "Frontend", nivel: "Iniciante", tempo: "15h", progresso: 80 },
  { id: 104, cursoId: 'historia-maranhao', titulo: "Node.js API", categoria: "Backend", nivel: "Intermediário", tempo: "20h", progresso: 20 },
];
type ListaTrilhasProps = {
  tipo: 'novas' | 'realizadas';
};

export default function ListaTrilhas({ tipo }: ListaTrilhasProps) {

  // Aqui  decidira qual lista carregar
  const tituloPagina = tipo === 'novas' ? 'Todas as Trilhas Novas' : 'Minhas Trilhas Realizadas';
  const dados = tipo === 'novas' ? DATA_NOVAS : DATA_REALIZADAS; 
  const semTrilhasRealizadas = tipo === 'realizadas' && dados.length === 0;

  return (
    <div className="pagina-listagem-ListaTrilhas">
      <header className="header-listagem-ListaTrilhas">
        <Link to="../Trilhasdecursos" className="btn-voltar-ListaTrilhas">← Voltar</Link>
        <h1>{tituloPagina}</h1>
        <BuscadePesquisa />
      </header>

      <main className="grid-cards-ListaTrilhas">
        {semTrilhasRealizadas ? (
          <div className="estado-vazio-ListaTrilhas">
            <p>Voce ainda nao se inscreveu em nenhum curso.</p>
            <Link to="../Trilhasnovas" className="btn-ver-trilhas-ListaTrilhas">
              Ver trilhas
            </Link>
          </div>
        ) : (
          dados.map(trilha => (
            <CardeCurso key={trilha.id} {...trilha} cursoId={trilha.cursoId} />
          ))
        )}
      </main>
    </div>
  );
}