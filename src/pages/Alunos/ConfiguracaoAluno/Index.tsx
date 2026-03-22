import { useState } from "react";
import "./Styles.css";

export default function Configuracoes() {
  const [dadosUsuario, setDadosUsuario] = useState({
    email: "usuario@email.com",
    celular: "(98) 98888-8888",
    notificacoes: true,
  });

  const [senhas, setSenhas] = useState({
    atual: "",
    nova: "",
    confirmar: "",
  });

  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleSalvarAcesso = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("Dados de acesso atualizados com sucesso.");
  };

  const handleAlterarSenha = (e: React.FormEvent) => {
    e.preventDefault();

    if (senhas.nova !== senhas.confirmar) {
      setMensagem("As novas senhas não coincidem.");
      return;
    }

    setMensagem("Senha alterada com sucesso.");
    setSenhas({ atual: "", nova: "", confirmar: "" });
  };

  return (
    <section className="config-page">
      {/* HEADER */}
      <header className="config-header-aluno">
        <h1>Configurações da Conta</h1>
        <p>Gerencie suas informações de acesso, segurança e preferências.</p>
      </header>

      {mensagem && <div className="config-feedback">{mensagem}</div>}

      <hr className="divisor-perfil" />

      <div className="config-grid">
        {/* COLUNA ESQUERDA */}
        <div className="config-col">
          <form onSubmit={handleSalvarAcesso}>
            <article className="dashboard-card-bg">
              <h3 className="titulo-bloco">Conta e Acesso</h3>

              <div className="form-group">
                <label>E-mail de login</label>
                <input
                  type="email"
                  value={dadosUsuario.email}
                  className="input-field"
                  onChange={(e) =>
                    setDadosUsuario({ ...dadosUsuario, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Celular de contato</label>
                <input
                  type="text"
                  value={dadosUsuario.celular}
                  className="input-field"
                  onChange={(e) =>
                    setDadosUsuario({
                      ...dadosUsuario,
                      celular: e.target.value,
                    })
                  }
                />
              </div>

              <button type="submit" className="btn-primario w-100">
                Salvar alterações
              </button>
            </article>
          </form>

          <article className="dashboard-card-bg mt-20">
            <h3 className="titulo-bloco">Preferências</h3>

            <div className="config-toggle-item">
              <div>
                <span className="toggle-label">
                  Notificações por e-mail
                </span>
                <p className="texto-informativo">
                  Receba avisos sobre vagas, candidaturas e atualizações.
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={dadosUsuario.notificacoes}
                  onChange={() =>
                    setDadosUsuario({
                      ...dadosUsuario,
                      notificacoes: !dadosUsuario.notificacoes,
                    })
                  }
                />
                <span className="slider"></span>
              </label>
            </div>
          </article>
        </div>

        {/* COLUNA DIREITA */}
        <div className="config-col">
          <form onSubmit={handleAlterarSenha}>
            <article className="dashboard-card-bg">
              <h3 className="titulo-bloco">Segurança</h3>

              <div className="form-group">
                <label>Senha atual</label>
                <input
                  type="password"
                  className="input-field"
                  value={senhas.atual}
                  onChange={(e) =>
                    setSenhas({ ...senhas, atual: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Nova senha</label>
                <input
                  type="password"
                  className="input-field"
                  value={senhas.nova}
                  onChange={(e) =>
                    setSenhas({ ...senhas, nova: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Confirmar nova senha</label>
                <input
                  type="password"
                  className="input-field"
                  value={senhas.confirmar}
                  onChange={(e) =>
                    setSenhas({ ...senhas, confirmar: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn-secundario-outline w-100">
                Alterar senha
              </button>
            </article>

            <article className="dashboard-card-bg mt-20 danger-zone">
              <h3 className="titulo-bloco danger-title">
                Zona de Risco
              </h3>

              <p className="texto-informativo">
                A exclusão da conta é permanente e remove todos os seus dados e
                histórico.
              </p>

              <button type="button" className="btn-danger-outline w-100">
                Excluir minha conta
              </button>
            </article>
          </form>
        </div>
      </div>
    </section>
  );
}