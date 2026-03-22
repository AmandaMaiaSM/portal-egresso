import { useState } from "react";
import {
  User,
  Mail,
  Shield,
  Key,
  Eye,
  EyeOff,
  UserCheck
} from "lucide-react";

import "./Styles.css";

type Permissao =
  | "Super Admin"
  | "Admin Portal"
  | "Diretor Unidade"
  | "Coordenador";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  permissao: Permissao;
}

interface Unidade {
  id: number;
  nome: string;
  diretor: Usuario | null;
  senhaGerada?: string;
  senhaVisivel?: boolean;
}

interface LogAdmin {
  id: number;
  usuario: string;
  acao: string;
  descricao: string;
  data: string;
}

export default function DiretoresUnidades() {

  const usuarioLogado = "Admin Portal";

  const [logs, setLogs] = useState<LogAdmin[]>([]);

  const [usuarios] = useState<Usuario[]>([
    { id: 1, nome: "Maria Silva", email: "maria@iema.ma.gov", permissao: "Diretor Unidade" },
    { id: 2, nome: "João Santos", email: "joao@iema.ma.gov", permissao: "Admin Portal" },
    { id: 3, nome: "Ana Costa", email: "ana@iema.ma.gov", permissao: "Coordenador" }
  ]);

  const [unidades, setUnidades] = useState<Unidade[]>([
    { id: 1, nome: "IEMA Bacabeira", diretor: usuarios[0] },
    { id: 2, nome: "IEMA São Luís", diretor: usuarios[1] },
    { id: 3, nome: "IEMA Imperatriz", diretor: null }
  ]);

  const [usuarioSelecionado, setUsuarioSelecionado] = useState<string>("");

  function registrarLog(acao: string, descricao: string) {

    const novoLog: LogAdmin = {
      id: Date.now(),
      usuario: usuarioLogado,
      acao,
      descricao,
      data: new Date().toLocaleString()
    };

    setLogs(prev => [...prev, novoLog]);
  }

  function gerarSenha() {

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let senha = "";

    for (let i = 0; i < 10; i++) {
      senha += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }

    return senha;
  }

  function resetarSenha(unidadeId: number) {

    const novaSenha = gerarSenha();

    setUnidades(prev =>
      prev.map(u =>
        u.id === unidadeId
          ? { ...u, senhaGerada: novaSenha, senhaVisivel: false }
          : u
      )
    );

    registrarLog(
      "Resetar Senha",
      `Senha redefinida para unidade ID ${unidadeId}`
    );
  }

  function toggleSenha(unidadeId: number) {

    setUnidades(prev =>
      prev.map(u =>
        u.id === unidadeId
          ? { ...u, senhaVisivel: !u.senhaVisivel }
          : u
      )
    );
  }

  function atribuirDiretor(unidadeId: number) {

    const usuario = usuarios.find(
      u => u.id === Number(usuarioSelecionado)
    );

    if (!usuario) return;

    setUnidades(prev =>
      prev.map(u =>
        u.id === unidadeId
          ? { ...u, diretor: usuario }
          : u
      )
    );

    registrarLog(
      "Alterar Diretor",
      `Unidade ${unidadeId} agora dirigida por ${usuario.nome}`
    );

    setUsuarioSelecionado("");
  }

  return (

    <main className="admin-container">

      <header className="admin-header">

        <div>
          <h1>Gestão de Diretores</h1>
          <p>Controle de responsáveis pelas unidades</p>
        </div>

      </header>

      <section className="units-grid">

        <h2>Unidades IEMA</h2>

        <div className="cards-wrapper">

          {unidades.map(unidade => (

            <div key={unidade.id} className="unit-card">

              <div className="unit-header">

                <h3>{unidade.nome}</h3>

                {unidade.diretor && (
                  <span className="badge">
                    <Shield size={14} />
                    {unidade.diretor.permissao}
                  </span>
                )}

              </div>

              {unidade.diretor ? (

                <div className="director-details">

                  <p>
                    <User size={16} />
                    {unidade.diretor.nome}
                  </p>

                  <p>
                    <Mail size={16} />
                    {unidade.diretor.email}
                  </p>

                </div>

              ) : (

                <div className="no-director">
                  Nenhum diretor atribuído
                </div>

              )}

              <div className="unit-actions">

                <div className="select-group">

                  <select
                    value={usuarioSelecionado}
                    onChange={(e) =>
                      setUsuarioSelecionado(e.target.value)
                    }
                  >

                    <option value="">
                      Selecionar responsável
                    </option>

                    {usuarios.map(u => (

                      <option key={u.id} value={u.id}>
                        {u.nome} ({u.permissao})
                      </option>

                    ))}

                  </select>

                  <button
                    className="btn-apply"
                    onClick={() => atribuirDiretor(unidade.id)}
                    disabled={!usuarioSelecionado}
                  >
                    <UserCheck size={16} />
                    Atribuir
                  </button>

                </div>

                <div className="password-area">

                  <button
                    onClick={() => resetarSenha(unidade.id)}
                    className="btn-secondary"
                  >
                    <Key size={16} />
                    Resetar Senha
                  </button>

                  {unidade.senhaGerada && (

                    <div className="password-display">

                      <code>
                        {unidade.senhaVisivel
                          ? unidade.senhaGerada
                          : "********"}
                      </code>

                      <button
                        className="btn-icon"
                        onClick={() =>
                          toggleSenha(unidade.id)
                        }
                      >

                        {unidade.senhaVisivel
                          ? <EyeOff size={16} />
                          : <Eye size={16} />}

                      </button>

                    </div>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="logs-section">

        <h2>Logs Administrativos</h2>

        <div className="logs-list">

          {logs.length === 0 && (
            <p>Nenhuma ação registrada.</p>
          )}

          {logs.map(log => (

            <div key={log.id} className="log-item">

              <strong>{log.acao}</strong>

              <span>{log.descricao}</span>

              <small>
                {log.usuario} • {log.data}
              </small>

            </div>

          ))}

        </div>

      </section>

    </main>

  );
}