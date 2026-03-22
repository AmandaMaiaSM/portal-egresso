import  { useState, useEffect } from 'react';

import Cabecalho from '../../../components/Cabecalho/Index';
import CarrosselHome from '../../../components/Carrossel/Index';
import BuscadePesquisa  from '../../../components/BuscadePesquisa/Index';
import './Styles.css';

//teste de imahem 
import alunoFoto from '../../../imagensdeTeste/aluna-iema.png';
import alunoFoto2 from '../../../imagensdeTeste/alunoMenino.png';

// Interface para o TypeScript e para o banco de dados do ADM
interface Depoimento {
  id: number;
  nome: string;
  curso: string;
  texto: string;
  foto: string;
}

export default function TodosDepoimentos() {
  // Estado que o ADM vai alimentar futuramente
  const [depoimentos, setDepoimentos] = useState<Depoimento[]>([]);
  const [depoimentosFiltrados, setDepoimentosFiltrados] = useState<Depoimento[]>([]);

  const handleBuscar = (termo: string) => {
    if (termo.trim() === '') {
      setDepoimentosFiltrados(depoimentos);
    } else {
      const filtrados = depoimentos.filter(
        (item) =>
          item.nome.toLowerCase().includes(termo.toLowerCase()) ||
          item.curso.toLowerCase().includes(termo.toLowerCase()) ||
          item.texto.toLowerCase().includes(termo.toLowerCase())
      );
      setDepoimentosFiltrados(filtrados);
    }
  };

  useEffect(() => {
    // Simulação dos dados vindos da API
    const dadosDoAdm = [
      {
        id: 1,
        nome: "João Silva",
        curso: "Técnico em Informática",
        texto: "O IEMA mudou minha vida e me preparou para o mercado.",
        foto: alunoFoto2
      },
      {
        id: 2,
        nome: "Maria Souza",
        curso: "Técnico em Enfermagem",
        texto: "Excelente estrutura e professores qualificados.",
        foto: alunoFoto
      },
       {
        id: 3,
        nome: "Carlos Oliveira",
        curso: "Técnico em Administração",
        texto: "Aulas práticas e metodologia inovadora.",
        foto: alunoFoto2
      }
    ];
    setDepoimentos(dadosDoAdm);
    setDepoimentosFiltrados(dadosDoAdm);
  }, []);

  return (
    <div className="layout-pagina-Depoimentos">
      <Cabecalho />
      
      <main className="conteudo-principal-Depoimentos">
        {/* Carrossel no topo, colado no cabeçalho */}
        <CarrosselHome />
        <BuscadePesquisa onBuscar={handleBuscar} />

        <div className="topo-paginas">
          <h1>Todos os Depoimentos</h1>
        </div>

        <section className="grid-depoimentos">
          {depoimentosFiltrados.map((item) => (
            <div key={item.id} className="card-depoimento">
              <img src={item.foto} alt={item.nome} className="foto-depoimento" />
              <p className="texto-depoimento">{item.texto}</p>
              <h3 className="nome-depoimento">{item.nome}</h3>
              <span className="curso-depoimento">{item.curso}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}