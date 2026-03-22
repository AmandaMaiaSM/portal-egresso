import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import logoIema from "../../assets/logoIEMA02-2.png";

export default function EsqueciMinhaSenha() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    console.log("Recuperar senha para:", email);

    //  futuramente: chamada API
    setMensagem("Se o e-mail estiver cadastrado, você receberá instruções.");

    setTimeout(() => {
      navigate("/loginAlunoIEMA");
    }, 2500);
  };

  return (
    <div className="layout-recuperar">

      <div className="container-recuperar">

        {/* Lado visual */}
        <div className="painel-visual-recuperar">
          <img src={logoIema} alt="Logo IEMA" />
          <h2>Recuperação de Senha</h2>
          <p>Informe seu e-mail para redefinir sua senha.</p>
        </div>

        {/* Formulário */}
        <div className="painel-formulario-recuperar">

          <form onSubmit={handleSubmit} className="form-recuperar">

            <h1>Esqueceu sua senha?</h1>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="btn-primario">
              Enviar email de recuperação
            </button>

            {mensagem && (
              <span className="mensagem-sucesso">
                {mensagem}
              </span>
            )}

            <div className="link-voltar">
              <span onClick={() => navigate("/loginAlunoIEMA")}>
                Voltar para login
              </span>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}