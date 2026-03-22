import { useState, useEffect } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

//teste de imahem 
import alunaFoto from '../../imagensdeTeste/aluna-iema.png';
import alunoFoto2 from '../../imagensdeTeste/alunoMenino.png';

// Interface para garantir a estrutura dos dados simulaçao de depoimentos que o Admin irá alimentar
interface Depoimento {
  id: number;
  nome: string;
  curso: string;
  texto: string;
  avatar: string;
  unidadeUema?: string;
}

const SecaoDepoimentos = () => {
  const navigate = useNavigate();
  const [depoimentos, setDepoimentos] = useState<Depoimento[]>([]);

  useEffect(() => {
    // Simulação da chamada de API que o Admin irá alimentar
    const buscarDepoimentos = [
      {
        id: 1,
        nome: "Amanda Santos",
        curso: "Engenharia Civil",
        texto: "O IEMA me proporcionou uma formação sólida e acesso a oportunidades no mercado.",
        avatar: alunaFoto,
          unidadeUema: "Unidade São Luís"
      },
      {
        id: 2,
        nome: "Carlos Oliveira",
        curso: "Técnico em Informática",
        texto: "Estudar no IEMA foi uma experiência que impactou diretamente minha carreira.",
        avatar: alunoFoto2,
        unidadeUema: "Unidade Teresina"
      },
      {
        id: 3,
        nome: "Fernanda Souza",
        curso: "Administração",
        texto: "Sou muito grata ao IEMA por todo conhecimento adquirido durante minha formação.",
        avatar: alunaFoto,
        unidadeUema: "Unidade Imperatriz"
      }
    ];

    setDepoimentos(buscarDepoimentos);
  }, []);

  return (
    <section className="secao-depoimentos-SD " id="depoimentos">
      <div className="container-depoimento-SD ">
        <h2>Depoimentos dos nossos alunos</h2>
        <p className="subtitulo-depoimentos-SD ">
          Conheça as histórias que marcaram a trajetória de nossos ex-alunos.
        </p>

        <div className="cards-depoimentos-SD ">
          {depoimentos.map((item) => (
            <div className="card-depoimento" key={item.id}>
              <img src={item.avatar} alt={item.nome} />
              <h3>{item.nome}</h3>
              <span>{item.curso}</span>
              <p>"{item.texto}"</p>
            </div>
          ))}
        </div>

        <div className="centralizar-SD ">
          
          <button className="botao-ver-mais-SD " onClick={() => navigate("/painel-publico/depoimentosAlunos")}>
            Ver Mais Depoimentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecaoDepoimentos;