
import { Link } from "react-router-dom";
import CardCurso from "../../../components/CardCurso/Index";
import trilhaCurso01 from "../../../imagensdeTeste/trilhaCurso01.png";
import { CURSOS_DATA } from "../../../bancoFicticio/cursosData";
import "./Styles.css";


export default function Trilhasdecursos() {
  const cursos = Object.entries(CURSOS_DATA).map(([id, curso]) => ({ id, ...curso }));
  const trilhasNovas = cursos.slice(0, 3);
  const trilhasRealizadas = cursos.slice(0, 3).map((curso, index) => ({
    ...curso,
    progresso: [100, 70, 40][index] ?? 30,
  }));

  return (
    <div className="trilhasdecursos-container-TCursos">
      <main className="trilhasdecursos-content-TCursos">
        
        {/* SEÇÃO TRILHAS NOVAS */}
        <section className="secao-trilhas-TCursos">
            <h1 className="titulo-secao-TCursos">Trilhas novas</h1>
            <div className="grid-cards-TCursos">
                {trilhasNovas.map((curso) => (
                  <CardCurso
                    key={curso.titulo}
                    cursoId={curso.id}
                    titulo={curso.titulo}
                    categoria={curso.tema}
                    nivel={curso.nivel}
                    tempo={`${curso.horas}h`}
                    imagem={curso.logo || trilhaCurso01}
                    corCategoria="var(--cor-destaque)"
                  />
                ))}
            </div>
            <Link to="../Trilhasnovas" className="btn-ver-mais-TCursos">
                Ver mais
            </Link>
        </section>

        {/* SEÇÃO TRILHAS REALIZADAS */}
        <section className="secao-trilhas-TCursos">
            <h1 className="titulo-secao-TCursos">Trilhas realizadas</h1>
            <div className="grid-cards-TCursos">
                {trilhasRealizadas.map((curso) => (
                  <CardCurso
                    key={`${curso.titulo}-realizada`}
                    cursoId={curso.id}
                    titulo={curso.titulo}
                    categoria={curso.tema}
                    nivel={curso.nivel}
                    tempo={`${curso.horas}h`}
                    imagem={curso.logo || trilhaCurso01}
                    progresso={curso.progresso}
                    corCategoria="var(--cor-destaque)"
                  />
                ))}
            </div>
                <Link to="../Minhastrilhas" className="btn-ver-mais-TCursos">Ver mais</Link>

        </section>

      </main>
    </div>
  );
}