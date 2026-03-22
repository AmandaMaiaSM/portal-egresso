import { useState } from "react";
import { Trash2 } from "lucide-react";
import "./Styles.css";

export default function DeletarConexoes() {
  const [empresas, setEmpresas] = useState([
    { id: "1", nome: "Tech Solutions", cnpj: "12.345.678/0001-99" },
    { id: "2", nome: "Inova Sistemas", cnpj: "22.456.987/0001-55" },
  ]);

  const [unidades, setUnidades] = useState([
    { tb01id: 1, tb01nome: "IEMA Bacabeira", bairro: "Centro", diretor: "Maria Silva" },
    { tb01id: 2, tb01nome: "IEMA São Luís", bairro: "Cohab", diretor: "João Santos" },
  ]);

  const [conexoes, setConexoes] = useState([
    { id: 1, empresa: "Tech Solutions", egresso: "Ana Lima", data: "2025" },
    { id: 2, empresa: "Inova Sistemas", egresso: "Carlos Souza", data: "2024" },
  ]);

  // Funções de remoção com confirmação
  function removerEmpresa(id: string) {
    if (window.confirm("Deseja realmente excluir esta empresa?")) {
      setEmpresas(empresas.filter((e) => e.id !== id));
    }
  }

  function removerUnidade(id: number) {
    if (window.confirm("Deseja realmente excluir esta unidade?")) {
      setUnidades(unidades.filter((u) => u.tb01id !== id));
    }
  }

  function removerConexao(id: number) {
    if (window.confirm("Deseja realmente desfazer esta conexão?")) {
      setConexoes(conexoes.filter((c) => c.id !== id));
    }
  }

  return (
    <main className="dashboard-grid-deletar">
      <header className="dashboard-header-deletar">
        <div>
          <h1>Deletar Conexões</h1>
          <p>Administração avançada do sistema</p>
        </div>
      </header>

      <section className="main-content-deletar">
        {/* COLUNA: EMPRESAS */}
        <div className="card-container-deletar">
          <h3>Empresas do Portal</h3>
          <div className="lista-deletar">
            {empresas.map((e) => (
              <div key={e.id} className="item-deletar">
                <div className="info-deletar">
                  <strong>{e.nome}</strong>
                  <span>{e.cnpj}</span>
                </div>
                <button
                  onClick={() => removerEmpresa(e.id)}
                  className="btn-remover"
                  title="Excluir Empresa"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA: UNIDADES */}
        <div className="card-container-deletar">
          <h3>Unidades do IEMA</h3>
          <div className="lista-deletar">
            {unidades.map((u) => (
              <div key={u.tb01id} className="item-deletar">
                <div className="info-deletar">
                  <strong>{u.tb01nome}</strong>
                  <span>{u.bairro}</span>
                  <small>Diretor: {u.diretor}</small>
                </div>
                <button
                  onClick={() => removerUnidade(u.tb01id)}
                  className="btn-remover"
                  title="Excluir Unidade"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA: CONEXÕES */}
        <div className="card-container-deletar">
          <h3>Conexões Empresa ↔ Egresso</h3>
          <div className="lista-deletar">
            {conexoes.map((c) => (
              <div key={c.id} className="item-deletar">
                <div className="info-deletar">
                  <strong>{c.egresso}</strong>
                  <span>{c.empresa}</span>
                  <small>Ano: {c.data}</small>
                </div>
                <button
                  onClick={() => removerConexao(c.id)}
                  className="btn-remover"
                  title="Excluir Conexão"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}