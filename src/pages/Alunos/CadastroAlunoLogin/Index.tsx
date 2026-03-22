import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoIema from "../../../assets/logoIEMA02-2.png";
import "./Styles.css";
export default function CadastroAluno() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    curso: "",
    cidade: "",
    biografia: "",
  });

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = evento.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCadastro = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    console.log("Dados:", formData);

    // 👉 futuramente: enviar para API
    navigate("/login/aluno");
  };

  return (
    <div className="layout-cadastro-login">

      <div className="container-cadastro-login">

        {/* Lado visual */}
        <div className="painel-visual-cadastro-login">
          <img src={logoIema} alt="Logo IEMA" />
          <h2>Bem-vindo!</h2>
          <p>Crie sua conta para acessar a plataforma.</p>
        </div>

        {/* Formulário */}
        <div className="painel-formulario-cadastro-login">

          <form onSubmit={handleCadastro} className="form-cadastroLogin">

            <h1>Criar Conta</h1>

            {/* Dados pessoais */}
            <fieldset className="grupo-form-cadastroLogin">
              <legend>Dados Pessoais</legend>

              <input
                type="text"
                id="nome"
                placeholder="Nome completo"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                id="email"
                placeholder="E-mail"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                id="telefone"
                placeholder="Telefone"
                onChange={handleChange}
              />

              <input
                type="password"
                id="senha"
                placeholder="Senha"
                onChange={handleChange}
                required
              />
            </fieldset>

            {/* Acadêmico */}
            <fieldset className="grupo-form-cadastroLogin">
              <legend>Dados Acadêmicos</legend>

              <input
                type="text"
                id="curso"
                placeholder="Curso técnico"
                onChange={handleChange}
              />

              <input
                type="text"
                id="cidade"
                placeholder="Cidade"
                onChange={handleChange}
              />
            </fieldset>

            {/* Bio */}
            <textarea
              id="biografia"
              placeholder="Fale sobre você..."
              onChange={handleChange}
            />

            <button type="submit" className="btn-primario" onClick={() => navigate("/loginAlunoIEMA")}>
              Finalizar Cadastro
            </button>

            <div className="link-cadastroLogin">
              Já possui conta?{" "}
              <span onClick={() => navigate("/loginAlunoIEMA")}>
                Entrar
              </span>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}