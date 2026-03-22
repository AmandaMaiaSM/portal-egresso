import  { useState } from 'react';

import BucadePesquisa from '../../../components/BuscadePesquisa/Index';
import './Styles.css'; 


const TalentosPage = () => {
  // Simulação de dados integrando TB12 (Candidatura), TB09 (Aluno) e TB04 (Usuário)
  const vagas = [
  {
    id: 1,
    titulo: "TÉCNICO EM SEGURANÇA DO TRABALHO",
    setor: "Ambiente e Saúde",
    candidatos: [
      {
        id: 1,
        nome: "Amanda Maia",
        curso: "Técnico em Eletrônica",
        status: "candidato",
        habilidades: "Normas de segurança, prevenção de riscos, ergonomia",
      },
      {
        id: 2,
        nome: "Bruno Silva",
        curso: "Informática",
        status: "selecionado",
        habilidades: "Análise de acidentes, legislação trabalhista, primeiros socorros",
      },
    ],
  },
  {
    id: 2,
    titulo: "TÉCNICO EM INFORMÁTICA PARA INTERNET",
    setor: "Informação e Comunicação",
    candidatos: [
      {
        id: 3,
        nome: "Carla Souza",
        curso: "Informática para Internet",
        status: "candidato",
        habilidades: "HTML, CSS, JavaScript, React",
      },
      {
        id: 4,
        nome: "Diego Ramos",
        curso: "Técnico em Redes",
        status: "candidato",
        habilidades: "Node.js, PHP, MySQL, segurança web",
      },
    ],
  },
  {
    id: 3,
    titulo: "TÉCNICO EM ELETROMECÂNICA",
    setor: "Controle e Processos Industriais",
    candidatos: [
      {
        id: 5,
        nome: "Fernanda Lima",
        curso: "Eletromecânica",
        status: "candidato",
        habilidades: "Manutenção de motores, automação industrial, desenho técnico",
      },
      {
        id: 6,
        nome: "João Pereira",
        curso: "Mecânica",
        status: "selecionado",
        habilidades: "Soldagem, hidráulica, pneumática, sistemas elétricos",
      },
    ],
  },
];
  const [vagaAberta, setVagaAberta] = useState<number | null>(null);
  const [termoBusca, setTermoBusca] = useState<string>("");

  // Função para alternar a visualização dos candidatos de uma vaga
  const toggleVaga = (id: number) => {
    setVagaAberta(vagaAberta === id ? null : id);
  };
   // Função para lidar com a busca
  const handleBuscar = (termo: string) => {
    setTermoBusca(termo);
  };

  {/* Função para normalizar texto (remover acentos e converter para minúsculas) */}
  const normalizarTexto = (texto: string) => {
    if (!texto) return "";
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

return (
  <div className="pagina-wrapper-talentosCandidatos">
    <main className="main-content-talentosCandidatos">

      <header className="secao-header-talentosCandidatos">
        <h1>Talentos e Candidatos</h1>
      </header>

      <BucadePesquisa
        placeholder="Buscar vagas..."
        onBuscar={handleBuscar}
      />

      {/* Renderização das vagas e candidatos filtrados */ }
      {vagas.map((vaga) => {
        const termo = normalizarTexto(termoBusca);

        const vagaFiltrada =
          termo === "" ||
          normalizarTexto(vaga.titulo).includes(termo) ||
          normalizarTexto(vaga.setor).includes(termo);

        const candidatosFiltrados = vaga.candidatos.filter((candidato) =>
          termo === "" ||
          normalizarTexto(candidato.nome).includes(termo) ||
          normalizarTexto(candidato.habilidades).includes(termo)
        );

        if (!vagaFiltrada && candidatosFiltrados.length === 0) {
          return null;
        }

        return (
          <section key={vaga.id} className="bloco-vaga-talentosCandidatos">
            <button
              className="header-vaga-talentosCandidatos"
              onClick={() => toggleVaga(vaga.id)}
            >
              <div className="header-vaga-info-talentosCandidatos">
                <h2>{vaga.titulo}</h2>
                <span className="tag-setor-talentosCandidatos">{vaga.setor}</span>
              </div>
              <span className="icone-toggle-talentosCandidatos">
                {vagaAberta === vaga.id ? "▲" : "▼"}
              </span>
            </button>


            {/* Renderização dos candidatos apenas se a vaga estiver aberta */ }
            {vagaAberta === vaga.id && (
              <div className="grid-candidatos-talentosCandidatos">
                {(vagaFiltrada ? vaga.candidatos : candidatosFiltrados).map(
                  (candidato) => (
                    <div key={candidato.id} className="cardtalentosCandidatos">
                      <div className="card-corpo-talentosCandidatos">
                        <h3>{candidato.nome}</h3>
                        <span className="badge-curso-talentosCandidatos">
                          {candidato.curso}
                        </span>
                        <p className="biografia-preview-talentosCandidatos">
                          {candidato.habilidades}
                        </p>
                      </div>

                      <div className="card-footer-talentosCandidatos">
                        <span
                          className={`status-tag ${candidato.status}`}
                        >
                          {candidato.status}
                        </span>
                        <div className="acoes-botoes-talentosCandidatos">
                          <button className="btn-secundario-talentosCandidatos">
                            Currículo
                          </button>
                          <button className="btn-primario-talentosCandidatos">
                            Avançar
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </section>
        );
      })}

    </main>
  </div>
);
};
export default TalentosPage;