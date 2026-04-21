import { useState } from "react";
import "./Styles.css";

type Trilha = {
  id: number;
  nome: string;
  curso: string;
  unidade: string;
  status: "ativa" | "inativa";
  modulos: number;
};

export default function TrilhasCadastradasAdmin() {
  const [trilhas, setTrilhas] = useState<Trilha[]>([
    {
      id: 1,
      nome: "TÉCNICO EM SEGURANÇA DO TRABALHO",
      curso: "SEGURANÇA DO TRABALHO",
      unidade: "Itaqui-Bacanga",
      status: "ativa",
      modulos: 5,
    },
    {
      id: 2,
      nome: "TÉCNICO EM INFORMÁTICA PARA INTERNET",
      curso: "INFORMÁTICA PARA INTERNET",
      unidade: "Itaqui-Bacanga",
      status: "inativa",
      modulos: 4,
    },
  ]);

  const toggleStatus = (id: number) => {
    setTrilhas(trilhas.map(t =>
      t.id === id
        ? { ...t, status: t.status === "ativa" ? "inativa" : "ativa" }
        : t
    ));
  };

  const excluirTrilha = (id: number) => {
    setTrilhas(trilhas.filter(t => t.id !== id));
  };

  return (
    <section className="gestao-vagas-container">
      
      {/* HEADER */}
      <header className="page-header">
        <div>
          <h1>Trilhas Cadastradas</h1>
          <p className="page-subtitle">
            Gerencie as trilhas cadastradas
          </p>
        </div>
      </header>

      {/* GRID */}
      <div className="vagas-grid">
        {trilhas.map((trilha) => (
          <article key={trilha.id} className="vaga-card">

            {/* STATUS */}
            <span className={`vaga-badge ${trilha.status}`}>
              {trilha.status}
            </span>

            <h3>{trilha.nome}</h3>

            <p><strong>Curso:</strong> {trilha.curso}</p>
            <p><strong>Unidade:</strong> {trilha.unidade}</p>
            <p><strong>Módulos:</strong> {trilha.modulos}</p>

            {/* AÇÕES */}
            <div className="acoes">
              <button className="btn-detalhes">
                Editar
              </button>

              <button
                className="btn-detalhes"
                onClick={() => toggleStatus(trilha.id)}
              >
                {trilha.status === "ativa" ? "Inativar" : "Ativar"}
              </button>

              <button
                className="btn-excluir"
                onClick={() => excluirTrilha(trilha.id)}
              >
                Excluir
              </button>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}