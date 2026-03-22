import { useParams } from 'react-router-dom';
import Cabecalho from '../../../components/Cabecalho/Index';
import './Styles.css';

const DetalheNoticia = () => {
  const { id } = useParams(); // Pega o ID da notícia na URL
  // Adicionei isso para o erro sumir do id, posi ele é necessário para buscar a notícia correta. No futuro, vamos  usar esse ID para fazer um fetch na API e obter os detalhes da notícia.
  console.log("Buscando a notícia com o ID:", id);

  // No futuro, aqui você fará um fetch: fetch(`/api/noticias/${id}`)
  const noticia = {
    titulo: "Título Completo da Notícia",
    data: "09/03/2025",
    texto: "Aqui entrará o texto completo que o administrador escreveu no painel. O IEMA continua crescendo e trazendo novas oportunidades para São Luís...",
    imagem: "/caminho/da/imagem.jpg"
  };

  return (
    <div className="pagina-detalhe-noticia">
      <Cabecalho />
      <main className="container-leitura">
        <article className="artigo-noticia">
          <span className="data-publicacao">Publicado em: {noticia.data}</span>
          <h1>{noticia.titulo}</h1>
          <img src={noticia.imagem} alt={noticia.titulo} className="imagem-destaque" />
          <div className="texto-completo">
            <p>{noticia.texto}</p>
          </div>
          
          <button className="botao-voltar" onClick={() => window.history.back()}>
            ← Voltar
          </button>
        </article>
      </main>
    </div>
  );
};

export default DetalheNoticia;