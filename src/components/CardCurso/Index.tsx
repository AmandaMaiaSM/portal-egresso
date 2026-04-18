import './Styles.css';
import { useNavigate } from 'react-router-dom';

import trilhaCurso01 from '../../imagensdeTeste/trilhaCurso01.png';


type CardCursoProps = {
  cursoId?: string;
  titulo: string;
  categoria: string;
  nivel: string;
  tempo: string;
  imagem?: string;
  progresso?: number;
  corCategoria?: string;
};


const CardTrilha = ({ cursoId, titulo, categoria, nivel, tempo, imagem, progresso }: CardCursoProps) => {
  const navigate = useNavigate();

  return (
    <div className="card-trilha-Cd">
      <div className="card-header-Cd">
        <img src={imagem || trilhaCurso01} alt={titulo} />
        <span className="badge" style={{ backgroundColor: 'var(--cor-destaque)' }}>
          {categoria}
        </span>
      </div>

      <div className="card-body-Cd">
        <h3 className="card-titulo-Cd">{titulo}</h3>
        <p className="card-subtitulo-Cd">
          <i className="icon-clock-Cd"></i> {nivel} • {tempo}
        </p>

        {/* Renderiza a barra de progresso apenas se houver o valor */}
        {progresso !== undefined && (
          <div className="container-progresso-Cd">
            <div className="barra-background-Cd">
              <div className="barra-fill-Cd" style={{ width: `${progresso}%` }}></div>
            </div>
            <span className="texto-progresso-Cd">{progresso}% concluído</span>
          </div>
        )}

        <button className="btn-visualizar-Cd" onClick={() => navigate(`/painelAlunoIEMA/DetalhesCursoTrilha/${cursoId ?? 'html-basico'}`)}>Visualizar</button>
      </div>
    </div>
  );
};

export default CardTrilha;