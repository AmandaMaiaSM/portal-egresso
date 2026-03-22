import './Styles.css';
import LogoBrisa2026 from '../../assets/logoBrisaIema.png'
import { useNavigate } from 'react-router-dom';

const SecaoEmpresas = ({ esconderBotao = false }: { esconderBotao?: boolean }) => {
  const navigate = useNavigate();
  // Estado que será preenchido pelo ADM via API futuramente
  const conteudo = {
    titulo: "Oportunidades e Parcerias",
    descricao1: "O IEMA mantém convênios com diversas empresas e indústrias para garantir que nossos alunos e egressos tenham acesso direto a vagas de estágio e emprego.",
    descricao2: "Conectamos o talento técnico formado em nossas unidades com as demandas reais do mercado de trabalho do Maranhão.",
    textoBotao: "Empresas Parceiras",
    estatisticas: [
      { numero: "50+", rotulo: "Conexões" },
      { numero: "1.200+", rotulo: "Alunos Contratados" },
      { numero: "85%", rotulo: "Empregabilidade" }
    ]
  };

  return (
    <section className="secao-empresas" id="parcerias">
      <div className="container-empresas">
        <div className="texto-empresas">
          <h2>{conteudo.titulo}</h2>
          <p>{conteudo.descricao1}</p>
          <p>{conteudo.descricao2}</p>
          <button className="botao-conhecer-vagas" style={esconderBotao ? { display: 'none' } : {}}
          onClick={() => navigate('/painel-publico/parceiras')}>

            {conteudo.textoBotao}

          </button>
        </div>
        <div className="imagem-empresas">
          <img src={LogoBrisa2026} alt="Logo IEMA" />
        </div>
      </div>

      {/* Faixa de estatísticas */}
      <div className="estatisticas-empresas">
        {conteudo.estatisticas.map((item, index) => (
          <div className="estatistica-item" key={index}>
            <span className="numero">{item.numero}</span>
            <span className="rotulo">{item.rotulo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecaoEmpresas;