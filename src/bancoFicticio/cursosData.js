export const CURSOS_DATA = {
  "html-basico": {
    titulo: "Introdução ao HTML",
    tema: "Frontend",
    nivel: "Iniciante",
    descricao: "Aprenda a estrutura básica do HTML e crie suas primeiras páginas web.",
    logo: "/logo-html.png",
    horas: 8,
    aulas: 12,
    modulosCount: 4,
    aprendizados: ["Fundamentos do HTML", "Primeiras páginas", "Formulários", "Projeto Final"],
    modulos: [
      { nome: "Módulo 1 - Fundamentos", aulas: 3, tempo: "1h" },
      { nome: "Módulo 2 - Estrutura", aulas: 4, tempo: "2h" }
    ],
    instrutores: [
      { nome: "Carlos Ferreira", papel: "Instrutor Principal", iniciais: "CF", estrelas: 4.9, alunos: "2.3k" }
    ]
  },
  "historia-maranhao": {
    titulo: "História na Palma da Mão",
    tema: "Cultura",
    nivel: "Geral",
    descricao: "Explore os monumentos históricos de São Luís e sua importância.",
    logo: "/logo-historia.png", // Seu projeto de Computação Vision!
    horas: 5,
    aulas: 10,
    modulosCount: 3,
    aprendizados: ["Casarões Coloniais", "História de São Luís", "Arquitetura"],
    modulos: [
      { nome: "Módulo 1 - Centro Histórico", aulas: 5, tempo: "2h" }
    ],
    instrutores: [
      { nome: "Ana Martins", papel: "Especialista", iniciais: "AM", estrelas: 4.8, alunos: "1k" }
    ]
  }
};