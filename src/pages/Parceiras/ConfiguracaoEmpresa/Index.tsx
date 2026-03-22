import { useState, useEffect } from "react";
import "./Styles.css";

interface Empresa {
  nome_fantasia: string;
  cnpj: string;
  setor: string;
  cidade: string;
  email: string;
  celular: string;
}

const ConfiguracoesEmpresa = () => {
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [editando, setEditando] = useState(false);
  const [loading, setLoading] = useState(true);
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    // Simulação de API
    setTimeout(() => {
      setEmpresa({
        nome_fantasia: "IEMA Tech Solutions",
        cnpj: "12.345.678/0001-90",
        setor: "Tecnologia da Informação",
        cidade: "São Luís",
        email: "contato@iematech.com",
        celular: "(98) 98765-4321",
      });
      setLoading(false);
    }, 600);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!empresa) return;
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const salvarAlteracoes = (e: React.FormEvent) => {
    e.preventDefault();
    setEditando(false);
    setSalvo(true);

    setTimeout(() => setSalvo(false), 3000);
  };


  // Simulação de logout
  const handleLogout = () => {
    console.log("Logout realizado");
    window.location.href = "/login";
  };

  if (loading || !empresa) {
    return <p style={{ padding: 40 }}>Carregando configurações...</p>;
  }

  return (
    <div className="pagina-wrapper-ConfigEMpresa">
      <main className="main-content-ConfigEMpresa">
        <header className="secao-header-ConfigEMpresa">
          <h1>Configurações</h1>
        </header>

        <section className="config-card-ConfigEMpresa">
          <div className="card-header-flex-ConfigEMpresa">
            <h3>Meu Perfil</h3>
            <button
              className="btn-secundario-ConfigEMpresa"
              onClick={() => setEditando(!editando)}
            >
              {editando ? "Cancelar" : "Editar Dados"}
            </button>
          </div>

          <form className="form-ConfigEMpresa" onSubmit={salvarAlteracoes}>
            <div className="grid-form-ConfigEMpresa">
              <div className="campo-ConfigEMpresa">
                <label>Nome Fantasia</label>
                <input
                  name="nome_fantasia"
                  value={empresa.nome_fantasia}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="campo-ConfigEMpresa">
                <label>CNPJ</label>
                <input value={empresa.cnpj} disabled />
              </div>

              <div className="campo-ConfigEMpresa">
                <label>Setor</label>
                <input
                  name="setor"
                  value={empresa.setor}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="campo-ConfigEMpresa">
                <label>Cidade</label>
                <input
                  name="cidade"
                  value={empresa.cidade}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="campo-ConfigEMpresa">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={empresa.email}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="campo-ConfigEMpresa">
                <label>Celular</label>
                <input
                  name="celular"
                  value={empresa.celular}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>
            </div>

            {editando && (
              <button type="submit" className="btn-primario-ConfigEMpresa btn-salvar-ConfigEMpresa">
                Salvar Alterações
              </button>
            )}

            {salvo && (
              <p className="feedback-sucesso-ConfigEMpresa">
                Dados atualizados com sucesso
              </p>
            )}
          </form>
        </section>

        <section className="config-card-ConfigEMpresa logout-section-ConfigEMpresa">
          <h3>Conta e Segurança</h3>
          <p>Deseja encerrar sua sessão atual?</p>
          <button className="btn-perigo-ConfigEMpresa" onClick={handleLogout}>
            Sair do Sistema
          </button>
        </section>
      </main>
    </div>
  );
};

export default ConfiguracoesEmpresa;