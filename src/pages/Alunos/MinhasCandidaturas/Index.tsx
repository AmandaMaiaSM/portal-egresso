import { useState } from "react";
import BuscadeMinhasCadidaturas from "../../../components/BuscadePesquisa/Index";
import "./Styles.css";

type Status =
  | "candidato"
  | "selecionado"
  | "contratado"
  | "recusado";

type Candidatura = {
  id: number;
  empresa: string;
  cargo: string;
  status: Status;
  data: string;
};

export default function MinhasCandidaturas() {
  const [termoBusca, setTermoBusca] = useState("");

  // Simulação da TB12CANDIDATURA
  const minhasVagas: Candidatura[] = [
    {
      id: 1,
      empresa: "Tech Solutions",
      cargo: "Desenvolvedor Frontend",
      status: "selecionado",
      data: "20/02/2026",
    },
    {
      id: 2,
      empresa: "Cloud Systems",
      cargo: "Estágio Backend",
      status: "candidato",
      data: "25/02/2026",
    },
    {
      id: 3,
      empresa: "InovaTech",
      cargo: "Analista de Dados",
      status: "recusado",
      data: "28/02/2026",
    },
    {
      id: 4,
      empresa: "SoftWorks",
      cargo: "Desenvolvedor Mobile",
      status: "candidato",
      data: "01/03/2026",
    },
  ];

  const statusLabel: Record<Status, string> = {
    candidato: "Candidato",
    selecionado: "Selecionado",
    contratado: "Contratado",
    recusado: "Recusado",
  };

  // Normalização (remove acentos e ignora maiúsculas)
  const normalizarTexto = (texto: string) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  // Filtragem
  const vagasFiltradas = minhasVagas.filter((vaga) => {
    const termo = normalizarTexto(termoBusca);

    if (!termo) return true;

    return (
      normalizarTexto(vaga.empresa).includes(termo) ||
      normalizarTexto(vaga.cargo).includes(termo) ||
      normalizarTexto(vaga.status).includes(termo) ||
      normalizarTexto(vaga.data).includes(termo)
    );
  });

  return (
    <section className="vagas-page">
      <header className="vagas-MinhasCandidaturas-header">
        <div className="vagas-MinhasCandidaturas-header-content">
          <h1>Minhas Candidaturas</h1>
          
          <p>Acompanhe o status dos processos seletivos que você participa.</p>
        </div>
      </header>

      <hr className="divisor-perfil" />

      <BuscadeMinhasCadidaturas
        placeholder="Buscar por empresa, cargo, status ou data..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      <div className="vagas-lista-container">
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((item) => (
            <div
              key={item.id}
              className="vaga-item-completo dashboard-card-bg"
            >
              <div className="vaga-info-principal">
                <div
                  className="vaga-avatar-empresa"
                  title={item.empresa}
                >
                  {item.empresa.charAt(0)}
                </div>

                <div>
                  <h4>{item.cargo}</h4>
                  <p className="vaga-empresa-nome">
                    {item.empresa} • Inscrito em {item.data}
                  </p>
                </div>
              </div>

              <span className={`status-badge ${item.status}`}>
                {statusLabel[item.status]}
              </span>
            </div>
          ))
        ) : (
          <p className="no-results">
            Nenhuma candidatura encontrada para “{termoBusca}”
          </p>
        )}
      </div>
    </section>
  );
}