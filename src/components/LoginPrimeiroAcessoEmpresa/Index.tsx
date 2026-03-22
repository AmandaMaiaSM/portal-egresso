import { Lock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import "./Styles.css";

export default function PrimeiroAcesso() {
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (senha.length < 6) {
      return setErro("A senha deve ter pelo menos 6 caracteres");
    }

    if (senha !== confirmar) {
      return setErro("As senhas não coincidem");
    }

    setErro("");

    // Aqui  chamaria sua API
    console.log("Nova senha:", senha);

    alert("Senha redefinida com sucesso!");
  }

  return (
    <div className="primeiro-container">

      <div className="primeiro-card">

        {/* Header */}
        <div className="primeiro-header">
          <ShieldCheck size={40} />
          <h2>Primeiro acesso</h2>
          <p>Defina uma nova senha para continuar</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="primeiro-form">

          <div className="input-group">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />
          </div>

          {erro && <span className="erro">{erro}</span>}

          <button type="submit" className="btn-salvar">
            Salvar nova senha
          </button>

        </form>

      </div>

    </div>
  );
}