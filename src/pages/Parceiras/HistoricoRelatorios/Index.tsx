import "./Styles.css";

const HistoricoRelatorios = () => {
  
  // DADOS MOCKADOS (simulando TB13EMPREGOS)
  
  const contratacoes = [
    {
      id: 1,
      aluno: "João Silva",
      vaga: "Técnico em Informática",
      dataInicio: "2026-02-15",
      status: "Ativo",
    },
    {
      id: 2,
      aluno: "Maria Souza",
      vaga: "Técnico em Eletromecânica",
      dataInicio: "2026-01-10",
      status: "Encerrado",
    },
    {
      id: 3,
      aluno: "Carlos Lima",
      vaga: "Técnico em Segurança do Trabalho",
      dataInicio: "2025-11-05",
      status: "Ativo",
    },
  ];


  // DADOS MOCKADOS (simulando TB10VAGA)
  
  const vagas = [
    { id: 1, status: "encerrada" },
    { id: 2, status: "encerrada" },
    { id: 3, status: "ativa" },
    { id: 4, status: "ativa" },
  ];

  
  // MÉTRICAS DINÂMICAS
 
  const totalContratacoes = contratacoes.length;

  const vagasEncerradas = vagas.filter(
    (vaga) => vaga.status === "encerrada"
  ).length;

  const efetividadeMedia =
    vagasEncerradas === 0
      ? 0
      : Math.round((totalContratacoes / vagasEncerradas) * 100);

  return (
    <div className="pagina-wrapper-HR">
      <main className="main-content-HR">
        {/* Cabeçalho */}
        <header className="secao-header-HR">
          <div className="titulo-container-HR">
            
            <h1>Histórico e Relatórios</h1>
          </div>
        </header>

        {/* Dashboard de Métricas */}
        <section className="dashboard-metrics-HR">
          <div className="metric-card-HR">
            <h4>Total de Contratações</h4>
            <span className="valor-HR">{totalContratacoes}</span>
          </div>

          <div className="metric-card-HR">
            <h4>Vagas Encerradas</h4>
            <span className="valor-HR">{vagasEncerradas}</span>
          </div>

          <div className="metric-card-HR">
            <h4>Efetividade Média</h4>
            <span className="valor-HR">{efetividadeMedia}%</span>
          </div>
        </section>

        {/* Histórico de Contratações */}
        <section className="historico-secao-HR">
          <h3>Registro de Contratações</h3>

          <div className="tabela-container-HR">
            <table className="tabela-estilizada-HR">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Vaga Originária</th>
                  <th>Data de Início</th>
                  <th>Status Atual</th>
                </tr>
              </thead>

              <tbody>
                {contratacoes.map((item) => (
                  <tr key={item.id}>
                    <td>{item.aluno}</td>
                    <td>{item.vaga}</td>
                    <td>
                      {new Date(item.dataInicio).toLocaleDateString("pt-BR")}
                    </td>
                    <td>
                      <span
                        className={
                          item.status === "Ativo"
                            ? "badge-sucesso-HR"
                            : "badge-encerrado-HR"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Relatórios / Gráficos */}
        <section className="relatorios-performance-HR">
          <h3>Desempenho das Vagas</h3>
          <div className="grafico-placeholder-HR">
            <p>
              Comparativo entre número de candidatos e contratações efetivas,
              segmentado por curso técnico.
            </p>
            {/* Aqui futuramente entra gráfico com dados da API */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HistoricoRelatorios;