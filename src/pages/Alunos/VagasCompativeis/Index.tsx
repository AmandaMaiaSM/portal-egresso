import { useState } from "react";
import BuscadePesquisa from "../../../components/BuscadePesquisa/Index";
import "./Styles.css";

// Definindo o tipo para as vagas de forma clara e organizada api fictícia para simular a obtenção de dados reais,
//  facilitando futuras integrações com  nossa APIs.
type Vaga = {
  id: number;
  titulo: string;
  empresa: string;
  local: string;
  tags: string[];
  salario?: string; // opcional
};

const TODAS_VAGAS: Vaga[] = [
  {
    id: 1,
    titulo: "Desenvolvedor Frontend",
    empresa: "Tech Solutions",
    local: "Remoto",
    tags: ["React", "CSS"],
    salario: "R$ 3.000",
  },
  {
    id: 2,
    titulo: "UI/UX Designer",
    empresa: "Creative Agency",
    local: "São Paulo",
    tags: ["Figma", "UI"],
    salario: "A combinar",
  },
  {
    id: 3,
    titulo: "Estágio em QA",
    empresa: "Soft House",
    local: "Híbrido",
    tags: ["Testes", "Manual"],
    // sem salário
  },
];

export default function VagasCompatíveis() {
  const [busca, setBusca] = useState("");

  const vagasFiltradas = TODAS_VAGAS.filter(vaga => 
    vaga.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="vagas-page">
      <header className="vagas-header-topo">
        <h1 >Vagas Compatíveis</h1>
      </header>

      <hr className="divisor-perfil" />

      <BuscadePesquisa
        placeholder="Buscar vagas por título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="vagas-lista-container">
        
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((vaga) => (
            <div key={vaga.id} className="vaga-item-completo dashboard-card-bg">
              <div className="vaga-info-principal">
                <div className="vaga-avatar-empresa">{vaga.empresa.charAt(0)}</div>
                <div>
                  <h4>{vaga.titulo}</h4>
                  <p className="vaga-empresa-nome">{vaga.empresa} • {vaga.local}</p>
                </div>
              </div>

              <div className="vaga-tags">
                {vaga.tags.map(tag => <span key={tag} className="tag-skill">{tag}</span>)}
              </div>

              <div className="vaga-acoes">
                <span className={`vaga-salario ${!vaga.salario ? "salario-indefinido" : ""}`}>
                  {vaga.salario ?? "A combinar"}
                </span>

                <button className="btn-candidatar">Candidatar-se</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Nenhuma vaga encontrada para "{busca}"</p>
        )}
      </div>
    </section>
  );
}