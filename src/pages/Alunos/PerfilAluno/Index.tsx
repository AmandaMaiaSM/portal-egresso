import "./Styles.css";
import { useState } from "react";
import BuscadePesquisa from "../../../components/BuscadePesquisa/Index";

const VAGAS_RECOMENDADAS = [
  { id: 1, titulo: "Desenvolvedor Frontend", empresa: "Tech Solutions", local: "Remoto" },
  { id: 2, titulo: "UI/UX Designer", empresa: "Creative Agency", local: "São Paulo" },
  { id: 3, titulo: "Estágio em QA", empresa: "Soft House", local: "Híbrido" },
];

const MINHAS_CANDIDATURAS = [
  {
    id: 101,
    vaga: "Desenvolvedor Júnior",
    empresa: "Tech Solutions",
    data: "10/02/2026",
    periodo: "Manhã",
    status: "Em análise",
    tipo: "aviso",
  },
  {
    id: 102,
    vaga: "Analista de Sistemas",
    empresa: "Cloud Systems",
    data: "05/02/2026",
    periodo: "Integral",
    status: "Aprovado",
    tipo: "sucesso",
  },
  {
    id: 103,
    vaga: "Estágio em Marketing Digital",
    empresa: "Creative Agency",
    data: "01/02/2026",
    periodo: "Tarde",
    status: "Rejeitado",
    tipo: "erro",
  },
];

export default function PainelAlunoDashboard() {

  const [busca, setBusca] = useState("");
  const [editandoBio, setEditandoBio] = useState(false);

  const [aluno, setAluno] = useState({
    nome: "Jurema Silva",
    curso: "Estudante de Tecnologia",
    bio: "Sou estudante de Tecnologia apaixonada por desenvolvimento de software, com foco em backend e aplicações mobile. Estou sempre em busca de aprender novas ferramentas, aprimorar minhas habilidades e transformar ideias em soluções eficientes. Acredito que a tecnologia é uma ponte para criar impacto real na vida das pessoas, e meu objetivo é crescer profissionalmente contribuindo com projetos inovadores e bem estruturados.",
    foto: "",
  });

  const [bioTemp, setBioTemp] = useState(aluno.bio);

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setAluno({ ...aluno, foto: imageUrl });
    }
  };

  const vagasFiltradas = VAGAS_RECOMENDADAS.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="dashboard-aluno">

      {/* HEADER */}
      <header className="dashboard-header">
        <BuscadePesquisa
          placeholder="Pesquisar vaga..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </header>

      {/* PERFIL */}
      <header className="dashboard-topo">
        <div className="avatar-wrapper">
          {aluno.foto ? (
            <img className="avatar" src={aluno.foto} alt={aluno.nome} />
          ) : (
            <div className="avatar avatar-placeholder">
              {aluno.nome.charAt(0)}
            </div>
          )}

          <label className="btn-edit-foto">
            ✎
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFotoChange}
            />
          </label>
        </div>

        <div className="info-aluno">
          <h1 className="nome-aluno">{aluno.nome}</h1>
          <span className="badge-aluno">{aluno.curso}</span>
        </div>
      </header>

      <hr className="divisor-perfil" />

      {/* BIO */}
      <article className="dashboard-card-bg bio-card">
        <div className="bio-header">
          <h3 className="titulo-bloco">Sobre mim</h3>

          {!editandoBio ? (
            <button
              className="btn-editar"
              onClick={() => setEditandoBio(true)}
            >
              ✏️ Editar
            </button>
          ) : (
            <div className="bio-actions">
              <button
                className="btn-cancelar"
                onClick={() => {
                  setEditandoBio(false);
                  setBioTemp(aluno.bio);
                }}
              >
                Cancelar
              </button>

              <button
                className="btn-salvar"
                onClick={() => {
                  setAluno({ ...aluno, bio: bioTemp });
                  setEditandoBio(false);
                }}
              >
                Salvar
              </button>
            </div>
          )}
        </div>

        {!editandoBio ? (
          <p className="bio-texto">
            {aluno.bio || "Nenhuma biografia adicionada."}
          </p>
        ) : (
          <textarea
            className="textarea-bio"
            value={bioTemp}
            onChange={(e) => setBioTemp(e.target.value)}
          />
        )}
      </article>

      {/* VAGAS */}
      <div className="dashboard-bloco">
        <h2 className="titulo-secao-perfil">Vagas recomendadas</h2>
        <div className="vagas-grid-cards">
          {vagasFiltradas.map((vaga) => (
            <div key={vaga.id} className="vaga-card">
              <h4>{vaga.titulo}</h4>
              <p>{vaga.empresa}</p>
              <span>{vaga.local}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CANDIDATURAS */}
      <div className="dashboard-bloco">
        <h2 className="titulo-secao-perfil">Minhas candidaturas</h2>

        <div className="dashboard-card-bg no-padding">
          <div className="candidaturas-header">
            <span>Empresa</span>
            <span>Vaga</span>
            <span>Data</span>
            <span>Período</span>
            <span>Status</span>
          </div>

          {MINHAS_CANDIDATURAS.map((item) => (
            <div key={item.id} className="candidaturas-linha">
              <span className="empresa-avatar">
                {item.empresa.charAt(0)}
              </span>
              <span>{item.vaga}</span>
              <span>{item.data}</span>
              <span>{item.periodo}</span>
              <span className={`status-badge is-${item.tipo}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}