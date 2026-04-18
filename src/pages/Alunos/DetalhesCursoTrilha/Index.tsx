import { useParams, Link } from 'react-router-dom';
import { Award, BookOpen, CheckCircle2, Clock3, Layers3 } from 'lucide-react';
import { CURSOS_DATA } from '../../../bancoFicticio/cursosData';
import './Styles.css';

export default function DetalhesCurso() {
  const { id } = useParams();
  const curso = id ? CURSOS_DATA[id] : undefined;

  // Caso o curso não exista na lista
  if (!curso) {
    return <div className="detalhes-container-DetalhesCurso">Curso não encontrado!</div>;
  }

  return (
    <div className="detalhes-container-DetalhesCurso">
      <Link to="../Trilhasdecursos" className="btn-voltar-topo-DetalhesCurso">← Voltar para Trilhas</Link>

      <div className="detalhes-layout-DetalhesCurso">
        <div className="coluna-principal-DetalhesCurso">
          
          {/* BANNER DINÂMICO */}
          <section className="banner-curso-DetalhesCurso">
            <div className="banner-img-DetalhesCurso">
               <img src={curso.logo} alt={curso.titulo} />
            </div>
            <div className="banner-texto-DetalhesCurso">
              <div className="badges-DetalhesCurso">
                <span className="badge-tema-DetalhesCurso">{curso.tema}</span>
                <span className="badge-nivel-DetalhesCurso">{curso.nivel}</span>
              </div>
              <h1>{curso.titulo}</h1>
              <p>{curso.descricao}</p>
              
              <div className="meta-info-DetalhesCurso">
                <span><Clock3 size={16} /> {curso.horas} horas</span>
                <span><BookOpen size={16} /> {curso.aulas} aulas</span>
                <span><Layers3 size={16} /> {curso.modulosCount} módulos</span>
                <span><Award size={16} /> Certificado</span>
              </div>
            </div>
          </section>

          {/* O QUE VAI APRENDER - MAPEADO */}
          <section className="o-que-aprender-DetalhesCurso">
            <h2>O que você vai aprender:</h2>
            <ul>
              {curso.aprendizados.map((item, index) => (
                <li key={index}><CheckCircle2 size={16} /> <span>{item}</span></li>
              ))}
            </ul>
          </section>

          {/* LISTA DE MÓDULOS - MAPEADA */}
          <section className="conteudo-lista-DetalhesCurso">
            <h2>Conteúdo do Curso</h2>
            {curso.modulos.map((mod, index) => (
              <div className="modulo-item-DetalhesCurso" key={index}>
                <span>{mod.nome}</span>
                <span>{mod.aulas} lições • {mod.tempo}</span>
              </div>
            ))}
          </section>
        </div>

        {/* SIDEBAR DINÂMICA */}
        <aside className="coluna-sidebar-DetalhesCurso">
          <div className="card-info-extra-DetalhesCurso">
            <h3>Certificado de conclusão</h3>
            <p>Certificado garantido ao realizar todas as aulas e concluir o projeto final.</p>
          </div>

          <div className="card-instrutores-DetalhesCurso">
            <h3>Instrutores</h3>
            {curso.instrutores.map((ins, index) => (
              <div className="instrutor-DetalhesCurso" key={index}>
                <div className="avatar-DetalhesCurso">{ins.iniciais}</div>
                <div>
                  <strong>{ins.nome}</strong>
                  <p>{ins.papel}</p>
                  <span>⭐ {ins.estrelas} ({ins.alunos} alunos)</span>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-inscrever-DetalhesCurso">Inscreva-se agora</button>
        </aside>
      </div>
    </div>
  );
}