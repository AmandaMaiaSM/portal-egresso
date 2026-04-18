export type CursoModulo = {
  nome: string;
  aulas: number;
  tempo: string;
};

export type CursoInstrutor = {
  nome: string;
  papel: string;
  iniciais: string;
  estrelas: number;
  alunos: string;
};

export type CursoDetalhado = {
  titulo: string;
  tema: string;
  nivel: string;
  descricao: string;
  logo: string;
  horas: number;
  aulas: number;
  modulosCount: number;
  aprendizados: string[];
  modulos: CursoModulo[];
  instrutores: CursoInstrutor[];
};

export const CURSOS_DATA: Record<string, CursoDetalhado> = {
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
    logo: "/logo-historia.png",
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
  },
    "Biologia": {
    titulo: "História na Palma da Mão",
    tema: "Cultura",
    nivel: "Geral",
    descricao: "Explore os monumentos históricos de São Luís e sua importância.",
    logo: "/logo-historia.png",
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
  },
};