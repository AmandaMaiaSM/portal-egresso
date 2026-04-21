import { useState } from "react";
import PublicarTrilhas from "../../../components/PublicarTrilhas/Index";
import "./Styles.css";

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

export default function CadastrarTrilhasCursos() {
  const [unidade, setUnidade] = useState("");
  const [curso, setCurso] = useState("");
  const [trilha, setTrilha] = useState<Trilha | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      unidade,
      curso,
      trilha,
    };

    console.log(payload);
  };

  return (
    <section className="gestao-vagas-container-CTCurso">
      
      {/* HEADER */}
      <header className="page-header-CTCurso">
        <div>
          <h1>Cadastrar Trilhas</h1>
          <p className="page-subtitle">
            Cadastre trilhas por unidade e curso
          </p>
        </div>
      </header>

      {/* FORM */}
      <form className="form-card-CTCurso" onSubmit={handleSubmit}>
        <h2>Nova Trilha</h2>

        {/* LINHA */}
        <div className="form-row-CTCurso">
          <div className="form-group-CTCurso">
            <label>Unidade</label>
            <input
              type="text"
              placeholder="Ex: Itaqui-Bacanga"
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
            />
          </div>

          <div className="form-group-CTCurso">
            <label>Curso</label>
            <input
              type="text"
              placeholder="Ex:Informática para Internet"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
            />
          </div>
        </div>

        {/* COMPONENTE REUTILIZADO */}
        <PublicarTrilhas onChange={setTrilha} />

        <button type="submit" className="btn-submit-CTCurso">
          Cadastrar trilha
        </button>
      </form>
    </section>
  );
}