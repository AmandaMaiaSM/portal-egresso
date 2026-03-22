import { useState } from "react";
import "./Styles.css";

interface Curso {
  id_curso: number;
  nome: string;
}

interface Instituicao {
  tb01id: number;
  tb01nome: string;
  bairro: string;
}

interface Aluno {
  id: number;
  nome: string;
  curso: string;
  instituicao: string;
  anoConclusao: number;
  statusEmprego: "Empregado" | "Desempregado";
}

export default function GestaoAlunos() {

  const cursos: Curso[] = [
    { id_curso: 1, nome: "Técnico em Informática" },
    { id_curso: 2, nome: "Administração" },
    { id_curso: 3, nome: "Eletrotécnica" }
  ];

  const instituicoes: Instituicao[] = [
    { tb01id: 1, tb01nome: "IEMA Bacabeira", bairro: "Centro" },
    { tb01id: 2, tb01nome: "IEMA São Luís", bairro: "Cohab" },
    { tb01id: 3, tb01nome: "IEMA Imperatriz", bairro: "Centro" }
  ];

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const [form, setForm] = useState({
    nome: "",
    curso: "",
    instituicao: "",
    anoConclusao: "",
    statusEmprego: "Desempregado"
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function adicionarAluno(e: React.FormEvent) {

    e.preventDefault();

    const novoAluno: Aluno = {
      id: Date.now(),
      nome: form.nome,
      curso: form.curso,
      instituicao: form.instituicao,
      anoConclusao: Number(form.anoConclusao),
      statusEmprego: form.statusEmprego as "Empregado" | "Desempregado"
    };

    setAlunos([...alunos, novoAluno]);

    setForm({
      nome: "",
      curso: "",
      instituicao: "",
      anoConclusao: "",
      statusEmprego: "Desempregado"
    });

  }

  const desempregados = alunos.filter(
    aluno => aluno.statusEmprego === "Desempregado"
  );

  const empregados = alunos.filter(
    aluno => aluno.statusEmprego === "Empregado"
  );

  return (

    <main className="dashboard-grid-alunos">

      <header className="dashboard-header-alunos">
        <div>
          <h1>Gestão de Alunos / Egressos</h1>
          <p>Monitoramento de empregabilidade dos egressos</p>
        </div>
      </header>

      <section className="main-content-alunos">

        {/* CADASTRO */}

        <div className="card-container-alunos">

          <h3>Cadastrar Aluno</h3>

          <form className="form-aluno" onSubmit={adicionarAluno}>

            <input
              type="text"
              name="nome"
              placeholder="Nome do aluno"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <select
              name="curso"
              value={form.curso}
              onChange={handleChange}
              required
            >
              <option value="">Curso</option>

              {cursos.map(curso => (
                <option key={curso.id_curso} value={curso.nome}>
                  {curso.nome}
                </option>
              ))}

            </select>

            <select
              name="instituicao"
              value={form.instituicao}
              onChange={handleChange}
              required
            >
              <option value="">Unidade</option>

              {instituicoes.map(inst => (
                <option key={inst.tb01id} value={inst.tb01nome}>
                  {inst.tb01nome}
                </option>
              ))}

            </select>

            <input
              type="number"
              name="anoConclusao"
              placeholder="Ano de conclusão do Ensino Médio"
              value={form.anoConclusao}
              onChange={handleChange}
              required
            />

            <select
              name="statusEmprego"
              value={form.statusEmprego}
              onChange={handleChange}
            >
              <option value="Empregado">Empregado</option>
              <option value="Desempregado">Desempregado</option>
            </select>

            <button className="btn-primario">
              Cadastrar Aluno
            </button>

          </form>

        </div>

        {/* ALUNOS CADASTRADOS */}

        <div className="card-container-alunos">

          <h3>Alunos cadastrados no Portal</h3>

          <div className="lista-alunos">

            {alunos.length === 0 && (
              <p>Nenhum aluno cadastrado.</p>
            )}

            {alunos.map(aluno => (

              <div key={aluno.id} className="aluno-item">

                <div className="info-aluno">

                  <strong>{aluno.nome}</strong>

                  <p>Ano Ensino Médio: {aluno.anoConclusao}</p>

                  <small>{aluno.curso}</small>

                </div>

                <span
                  className={
                    aluno.statusEmprego === "Empregado"
                      ? "status-empregado"
                      : "status-desempregado"
                  }
                >
                  {aluno.statusEmprego}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* EMPREGADOS */}

        <div className="card-container-alunos">

          <h3>Alunos Empregados</h3>

          <div className="lista-alunos">

            {empregados.length === 0 && (
              <p>Nenhum egresso empregado registrado.</p>
            )}

            {empregados.map(aluno => (

              <div key={aluno.id} className="aluno-item">

                <div className="info-aluno">

                  <strong>{aluno.nome}</strong>

                  <span>{aluno.curso}</span>

                  <small>{aluno.instituicao}</small>

                  <p>Ano conclusão: {aluno.anoConclusao}</p>

                </div>

                <span className="status-empregado">
                  Empregado
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* DESEMPREGADOS */}

        <div className="card-container-alunos">

          <h3>Alunos Desempregados</h3>

          <div className="lista-alunos">

            {desempregados.length === 0 && (
              <p>Nenhum egresso desempregado.</p>
            )}

            {desempregados.map(aluno => (

              <div key={aluno.id} className="aluno-item">

                <div className="info-aluno">

                  <strong>{aluno.nome}</strong>

                  <span>{aluno.curso}</span>

                  <small>{aluno.instituicao}</small>

                  <p>Ano conclusão: {aluno.anoConclusao}</p>

                </div>

                <span className="status-desempregado">
                  Desempregado
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}