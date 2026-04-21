import { useState } from "react";
import BucadedePesquisa from "../../../components/BuscadePesquisa/Index";
import "./Styles.css";
import PublicarTrilhas from "../../../components/PublicarTrilhas/Index";
//import { data } from "react-router-dom";

type StatusVaga = "ativa" | "encerrada";


type Modulo = {
  titulo: string;
  arquivo: File | null;
};

type Trilha = {
  nome: string;
  descricao: string;
  professores: string;
  modulos: Modulo[];
};

export default function GestaoVagas() {
  const [abaAtiva, setAbaAtiva] = useState<"listagem" | "cadastro">("listagem");
  const [cursos, setCursos] = useState<string[]>([]);
  const [cursoInput, setCursoInput] = useState("");
  const [termoBusca, setTermoBusca] = useState("");
  const [usarTrilhas, setUsarTrilhas] = useState(false);
  const [trilha, setTrilha] = useState<Trilha | null>(null);

  const minhasVagas = [
    {
      id: 1,
      titulo: "Desenvolvedor Frontend",
      curso: "Informática",
      candidatos: 12,
      limite: 20,
      status: "ativa" as StatusVaga,
    },
    {
      id: 2,
      titulo: "Técnico em Eletrotécnica",
      curso: "Eletrotécnica",
      candidatos: 30,
      limite: 30,
      setor: "Controle e Processos Industriais",
      dataPublicacao: "2024-05-01",
      dataEncerramento: "2024-06-30",
      status: "ativa" as StatusVaga,
    },
  ];

  // Função para adicionar curso à lista
    const adicionarCurso = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && cursoInput.trim()) {
      e.preventDefault();

      if (!cursos.includes(cursoInput.trim())) {
        setCursos([...cursos, cursoInput.trim()]);
      }

      setCursoInput("");
    }
  };

  const removerCurso = (curso: string) => {
    setCursos(cursos.filter(c => c !== curso));
  };

  // Função para lidar com a busca
  const handleBuscar = (termo: string) => {
    setTermoBusca(termo);
  };

  // Filtrar vagas com base no termo de busca
  const normalizarTexto = (texto: string) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const vagasFiltradas = minhasVagas.filter((vaga) => {
    const termo = normalizarTexto(termoBusca);

    if (termo === "") return true;

    return (
      normalizarTexto(vaga.titulo).includes(termo) ||
      normalizarTexto(vaga.curso).includes(termo)
    );
  });



  return (
    <section className="gestao-vagas-container">
      {/* HEADER */}
      <header className="page-header">
        <div>
          <h1>Gestão de Vagas</h1>
          {/* Busca */}
          <BucadedePesquisa placeholder="Pesquisar vagas..." onBuscar={handleBuscar} />
          <p className="page-subtitle">
            Gerencie suas vagas, acompanhe candidatos e publique novas oportunidades.
          </p>
        </div>

        <div className="tabs">
          <button
            className={abaAtiva === "listagem" ? "active" : ""}
            onClick={() => setAbaAtiva("listagem")}
          >
            Minhas Vagas
          </button>
          <button
            className={abaAtiva === "cadastro" ? "active" : ""}
            onClick={() => setAbaAtiva("cadastro")}
          >
            Nova Vaga
          </button>
        </div>
      </header>

      {/* listagem de vagas */}
      
      {abaAtiva === "listagem" && (
        
        <div className="vagas-grid">
          {vagasFiltradas.map((vaga) => {
            const percentual = Math.min(
              (vaga.candidatos / vaga.limite) * 100,
              100
            );

            return (

              // Card de vaga com badge de status, título, curso, progresso de candidatos e botão para detalhes

              <article key={vaga.id} className={`vaga-card ${vaga.status}`}>

                <span className={`vaga-badge ${vaga.status}`}>
                  {vaga.status}
                </span>

                <h3>{vaga.titulo}</h3>
                <p className="vaga-curso">
                  <strong>Curso:</strong> {vaga.curso}
                </p>

                <div className="vaga-progress">
                  <span>
                    {vaga.candidatos} de {vaga.limite} candidatos
                  </span>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${
                        percentual >= 90 ? "alerta" : ""
                      }`}
                      style={{ width: `${percentual}%` }}
                    />
                  </div>
                </div>

                <button className="btn-detalhes">
                  Ver candidatos
                </button>
              </article>
            );
          })}
        </div>
      )}

      {/*  Cadastrar vagas */}
      {abaAtiva === "cadastro" && (
        <form className="form-card">
          <h2>Publicar Nova Vaga</h2>

          <div className="form-group">
            <label>Título da vaga</label>
            <input type="text" placeholder="Ex: Estágio em Suporte" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Cursos técnicos desejados</label>

              <div className="tags-input">
                {cursos.map((curso, index) => (
                  <span key={index} className="tag">
                    {curso}
                    <button type="button" onClick={() => removerCurso(curso)}>×</button>
                  </span>
                ))}

                <input
                  type="text"
                  placeholder="Digite um curso e pressione Enter"
                  value={cursoInput}
                  onChange={(e) => setCursoInput(e.target.value)}
                  onKeyDown={adicionarCurso}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Limite de candidatos</label>
              <input type="number" placeholder="Ex: 50" />
            </div>
          </div>

          <div className="form-row">  
            <div className="form-group">
              <label>Setor</label>
              <input type="text" placeholder="Ex: Tecnologia da Informação" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Data de publicação</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Data de encerramento</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group">
            <label>Descrição da vaga</label>
            <textarea
              rows={5}
              placeholder="Descreva responsabilidades, requisitos e benefícios..."
            />
          </div>

          {  /* Opção para usar trilhas */}

          <div className="form-group">
            <label>Adicionar trilhas?</label>

            <select
              value={usarTrilhas ? "sim" : "nao"}
              onChange={(e) => {
                const ativarTrilhas = e.target.value === "sim";
                setUsarTrilhas(ativarTrilhas);

                if (!ativarTrilhas) {
                  setTrilha(null);
                }
              }}
            >
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>
          </div>

          {/* Renderização condicional */}
          {usarTrilhas && (
            <>
              <PublicarTrilhas onChange={setTrilha} />

              {trilha && (
                <p className="trilha-resumo">
                  Total de módulos: {trilha.modulos.length}
                </p>
              )}
            </>
          )}
          
          <button type="submit" className="btn-submit">
            Publicar vaga
          </button>
        </form>
      )}
    </section>
  );
}