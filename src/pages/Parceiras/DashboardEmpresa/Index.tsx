import "./Styles.css";

export default function DashboardEmpresa() {
  // DADOS MOCKADOS (depois virão da API)
  const indicadores = {
    vagasAtivas: 6,
    novasCandidaturas: 18,
    totalContratados: 9,
    vagasEmAlerta: 2,
  };

  const ultimosInscritos = [
    { id: 1, nome: "Ana Silva", vaga: "Desenvolvedor Frontend", data: "02/03/2026" },
    { id: 2, nome: "Carlos Souza", vaga: "Estágio em Backend", data: "01/03/2026" },
    { id: 3, nome: "Maria Oliveira", vaga: "Analista de Dados", data: "28/02/2026" },
  ];

  const vagasEncerramento = [
    { id: 1, titulo: "Desenvolvedor Mobile", dias: 3 },
    { id: 2, titulo: "Suporte Técnico", dias: 1 },
  ];

  return (
   
    <section className="dashboard-empresa">
      {/* TÍTULO */}
      <header className="dashboard-header">
        <h1>Dashboard da Empresa</h1>
        <p>Visão geral das suas vagas, candidaturas e contratações.</p>
      </header>

      {/* INDICADORES */}
      <div className="dashboard-cards">
        <div className="card-indicador">
          <h3>{indicadores.vagasAtivas}</h3>
          <span>Vagas Ativas</span>
        </div>

        <div className="card-indicador destaque">
          <h3>{indicadores.novasCandidaturas}</h3>
          <span>Novas Candidaturas</span>
        </div>

        <div className="card-indicador sucesso">
          <h3>{indicadores.totalContratados}</h3>
          <span>Total de Contratados</span>
        </div>

        <div className="card-indicador alerta">
          <h3>{indicadores.vagasEmAlerta}</h3>
          <span>Vagas em Alerta</span>
        </div>
      </div>

      {/* GRÁFICOS (estrutura pronta) */}
      <div className="dashboard-graficos">
        <div className="grafico-card">
          <h3>Status de fase da seleção</h3>
          <div className="grafico-placeholder">
            {/* Aqui entra o gráfico de pizza */}
            Gráfico de Status
          </div>
        </div>

        <div className="grafico-card">
          <h3>Vagas por cursos</h3>
          <div className="grafico-placeholder">
            {/* Aqui entra o gráfico de barras */}
            Gráfico por Curso
          </div>
        </div>
      </div>

      {/* TABELAS */}
      <div className="dashboard-tabelas">
        {/* ÚLTIMOS INSCRITOS */}
        <div className="tabela-card">
          <h3>Últimos Inscritos</h3>
          <table>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Vaga</th>
                <th>Data Inscrição</th>
              </tr>
            </thead>
            <tbody>
              {ultimosInscritos.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.vaga}</td>
                  <td>{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* VAGAS EM ALERTA */}
        <div className="tabela-card alerta">
          <h3>Vagas Próximas do Encerramento</h3>
          <ul>
            {vagasEncerramento.map((vaga) => (
              <li key={vaga.id}>
                <strong>{vaga.titulo}</strong>
                <span>{vaga.dias} dias restantes</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}