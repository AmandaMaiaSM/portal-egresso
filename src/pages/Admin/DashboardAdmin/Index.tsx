import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Users, MousePointer2, FileText, Building2, PlusCircle, ClipboardList } from 'lucide-react';
import "./Styles.css";

const dadosDashboard = {
  estatisticas: [
    { id: 1, label: "Usuários", valor: 1240, icon: Users, cor: "#4f46e5" },
    { id: 2, label: "Acessos Hoje", valor: 320, icon: MousePointer2, cor: "#10b981" },
    { id: 3, label: "Notícias", valor: 58, icon: FileText, cor: "#f59e0b" },
    { id: 4, label: "Empresas", valor: 42, icon: Building2, cor: "#ef4444" },
  ],
  // Dados simulados para o gráfico
  graficoAcessos: [
    { nome: 'Jan', acessos: 400 },
    { nome: 'Fev', acessos: 700 },
    { nome: 'Mar', acessos: 1240 },
  ],
  atualizacoes: [
    { id: 1, titulo: "Novo programa de estágio aberto", data: "20/03/2026" },
    { id: 2, titulo: "Depoimento de egresso contratado", data: "19/03/2026" },
  ]
};

export default function DashboardAdmin() {
  return (
    <main className="dashboard-grid dashboard-admin">
      
      {/* 1. Header Ocupando toda a largura */}
      <header className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Bem-vindo ao painel administrativo</p>
        </div>
        <button className="btn-primario"><PlusCircle size={18} /> Novo Relatório</button>
      </header>

      {/* 2. Cards de Estatísticas */}
      <section className="stats-container">
        {dadosDashboard.estatisticas.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.cor}20`, color: stat.cor }}>
              <stat.icon size={24} />
            </div>
            <div>
              <span>{stat.label}</span>
              <h3>{stat.valor}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Área Principal (Gráfico) */}
      <section className="main-content">
        <div className="card-container">
          <h3>Desempenho de Acessos</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={dadosDashboard.graficoAcessos}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="nome" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f3f4f6'}} />
                <Bar dataKey="acessos" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 4. Sidebar (Atualizações e Ações) */}
      <aside className="sidebar-content">
        <div className="card-container">
          <h3>Ações Rápidas</h3>
          <div className="acoes-lista">
            <button className="btn-acao"><PlusCircle size={16} /> Criar Notícia</button>
            <button className="btn-acao"><ClipboardList size={16} /> Gerar Relatório</button>
          </div>
        </div>

        <div className="card-container">
          <h3>Últimas Atualizações</h3>
          <ul className="feed-atualizacoes">
            {dadosDashboard.atualizacoes.map(item => (
              <li key={item.id}>
                <strong>{item.titulo}</strong>
                <small>{item.data}</small>
              </li>
            ))}
          </ul>
        </div>
      </aside>

    </main>
  );
}