import { useState } from "react";
import "./Styles.css";

export default function Curriculum() {
  const [perfil, setPerfil] = useState({
    nome: "Nome do Usuário",
    curso: "Técnico em Informática",
    biografia:
      "Biografia resumida do aluno. Aqui entra uma breve descrição profissional, habilidades principais e interesses focados no mercado.",
    habilidades: ["React", "JavaScript", "CSS", "Node.js"],
    telefone: "(98) 98888-8888",
    email: "usuario@email.com",
    endereco: "São Luís, MA",
  });

  const [novaSkill, setNovaSkill] = useState("");

  const adicionarSkill = () => {
    if (novaSkill && !perfil.habilidades.includes(novaSkill)) {
      setPerfil({
        ...perfil,
        habilidades: [...perfil.habilidades, novaSkill],
      });
      setNovaSkill("");
    }
  };

  return (
    <section className="curriculum-page">
      {/* HEADER DA PÁGINA */}
      <header className=" curriculum-header-topo">
        <h1>Meu Currículo</h1>
        <p>
          Mantenha seus dados atualizados para atrair melhores oportunidades.
        </p>
      </header>

      <hr className="divisor-perfil" />

      {/* GRID PRINCIPAL */}
      <div className="curriculum-grid">
        {/* COLUNA ESQUERDA */}
        <div className="curriculum-col">
          <article className="dashboard-card-bg">
            <h3 className="titulo-bloco">Dados Pessoais</h3>

            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                value={perfil.nome}
                disabled
                className="input-field disabled"
              />
            </div>

            <div className="form-group">
              <label>Curso Técnico</label>
              <input
                type="text"
                value={perfil.curso}
                disabled
                className="input-field disabled"
              />
            </div>

            <div className="form-row-curriculo">
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={perfil.telefone}
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label>Localização (Cidade/UF)</label>
                <input
                  type="text"
                  value={perfil.endereco}
                  className="input-field"
                />
              </div>
            </div>
          </article>

          <article className="dashboard-card-bg mt-20">
            <h3 className="titulo-bloco">Sobre mim</h3>
            <p className="texto-informativo">
              Conte sobre sua trajetória, habilidades e objetivos profissionais.
            </p>

            <div className="biografia-box">
              <textarea
                className="biografia-textarea"
                value={perfil.biografia}
                maxLength={600}
                onChange={(e) =>
                  setPerfil({ ...perfil, biografia: e.target.value })
                }
              />
              <span className="contador-texto">
                {perfil.biografia.length}/600
              </span>
            </div>
          </article>
        </div>

        {/* COLUNA DIREITA */}
        <div className="curriculum-col">
          <article className="dashboard-card-bg">
            <h3 className="titulo-bloco">Habilidades e Competências</h3>
            {/* HABILIDADES -> SKILLS */}
            <div className="skills-container">
              {perfil.habilidades.map((skill) => (
                <span key={skill} className="tag-skill-edit">
                  {skill}
                  <button
                    onClick={() =>
                      setPerfil({
                        ...perfil,
                        habilidades: perfil.habilidades.filter(
                          (s) => s !== skill
                        ),
                      })
                    }
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>

            <div className="add-skill-row">
              <input
                type="text"
                placeholder="Ex: Python, Figma..."
                value={novaSkill}
                className="input-field"
                onChange={(e) => setNovaSkill(e.target.value)}
              />
              <button
                className="btn-adicionar-skill"
                onClick={adicionarSkill}
              >
                +
              </button>
            </div>
          </article>

          <article className="dashboard-card-bg mt-20">
            <h3 className="titulo-bloco">Currículo Profissional</h3>
            <p className="texto-informativo">
              Gere uma versão em PDF pronta para impressão ou envio por e-mail.
            </p>
            <button className="btn-gerar-pdf">
              📄 Gerar Currículo em PDF
            </button>
          </article>
        </div>
      </div>

      {/* BOTÃO SALVAR NO FINAL */}
      <div className="curriculum-footer">
        <button className="btn-salvar-curriculo">
          Salvar Alterações
        </button>
      </div>
    </section>
  );
}