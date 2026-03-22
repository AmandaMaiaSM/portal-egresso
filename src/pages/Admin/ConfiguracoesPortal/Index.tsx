import { 
  Settings, 
  ShieldCheck, 
  GraduationCap, 
  Building2, 
  MessageSquare, 
  History, 
  Wrench,
  ChevronRight 
} from "lucide-react"; // Sugestão de biblioteca de ícones
import "./Styles.css";

export default function ConfiguracoesPortal() {
  // Array dinâmico para facilitar a manutenção
  const modulos = [
    { id: 1, titulo: "Configurações Gerais", icon: <Settings />, desc: "Nome do portal, suporte e contatos" },
    { id: 2, titulo: "Segurança e Permissões", icon: <ShieldCheck />, desc: "Níveis de acesso e tempo de sessão" },
    { id: 3, titulo: "Estrutura Acadêmica", icon: <GraduationCap />, desc: "Cursos, turmas e matrizes" },
    { id: 4, titulo: "Estrutura Institucional", icon: <Building2 />, desc: "Unidades (IEMAs) e departamentos" },
    { id: 5, titulo: "Comunicação", icon: <MessageSquare />, desc: "Modelos de e-mail e notificações" },
    { id: 6, titulo: "Logs do Sistema", icon: <History />, desc: "Histórico de ações e erros" },
    { id: 7, titulo: "Manutenção", icon: <Wrench />, desc: "Limpeza de cache e backups" },
  ];

  return (
    <main className="dashboard-grid configuracoes-admin">
      <header className="dashboard-header-admin">
        <div className="header-content-admin">
          <h1>Centro Administrativo</h1>
          <p>Configurações globais do sistema</p>
        </div>
      </header>

      <section className="main-content-grid-admin">
        {modulos.map((item) => (
          <div key={item.id} className="card-modulo-admin">
            <div className="icon-wrapper-admin">
              {item.icon}
            </div>
            <div className="card-body--admin">
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </div>
            <button className="btn-acessar-admin">
              <ChevronRight size={20} />
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}