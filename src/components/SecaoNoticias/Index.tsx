import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import noticiaPlaceholder1 from '../../imagensdeTeste/iema-bacana-1-1.jpg';
import noticiaPlaceholder2 from '../../imagensdeTeste/iema-bacana-3.jpeg';
import noticiaPlaceholder3 from '../../imagensdeTeste/Turma-201-baganga.jpeg';


// 1. As interfaces ficam sempre fora da função do componente
interface Noticia {
  id: number;
  tag: string;
  imagem: string;
  titulo: string;
  data: string;
  resumo: string;
}


interface SecaoNoticiasProps {
  esconderBotao?: boolean;
}

// essa parte do componente é a função principal, onde a lógica e o JSX ficam
//  simulaçao do componente, onde a lógica e o JSX ficam juntos
const SecaoNoticias = ({ esconderBotao = false }: SecaoNoticiasProps) => {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    const buscarNoticias = [
      {
        id: 1,
        tag: "Notícia!",
        imagem: noticiaPlaceholder1,
        titulo: "IEMA promove evento de integração para egressos",
        data: "09/03/2025",
        resumo: "Confira detalhes dessa notícia relacionada aos egressos e oportunidades acadêmicas."
      },
      {
        id: 3,
        tag: "Sucesso",
        imagem: noticiaPlaceholder3,
        titulo: "Histórias da turma 201: conquistas e desafios dos formados",
        data: "07/03/2025",
        resumo: " Acolhimento com oficina Mente Criativa.."
      },
      {
        id: 2,
        tag: "Evento",
        imagem: noticiaPlaceholder2,
        titulo: "Programa de Acompanhamento Profissional",
        data: "08/03/2025",
        resumo: "Programa especial para acompanhamento profissional dos formados pelo IEMA."
      }
      
    ];

    setNoticias(buscarNoticias);
  }, []);

  return (
    <section className="secao-noticias" id="noticias">
      <h2 className="titulo-secao-noticia">Últimas Notícias</h2>

      <div className="container-noticias">
        {noticias.map((item) => (
          <div
            className="card-noticia" 
            key={item.id}
            onClick={() => navigate(`/painel-publico/noticia/${item.id}`)} 
            style={{ cursor: 'pointer' }}
          >
            <span className="tag-noticia">{item.tag}</span>
            <img src={item.imagem} alt={item.titulo} />
            
            <div className="conteudo-noticia">
              <h3>{item.titulo}</h3>
              <span className="data-noticia">{item.data}</span>
              <p>{item.resumo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Só renderiza a div se esconderBotao for false */}
      {!esconderBotao && (
        <div className="centralizar">
          <button className="botao-ver-todas" onClick={() => navigate('/painel-publico/noticias')}>
            Ver Todas as Notícias
          </button>
        </div>
      )}
    </section>
  );
};

export default SecaoNoticias;