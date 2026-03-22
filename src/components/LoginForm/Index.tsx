import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './Styles.css';
import logoIema from '../../assets/logoIEMA02-2.png';

export default function LoginAluno() {
  const [gmail, setGmail] = useState('');
  const [senha, setSenha] = useState('');
  //const navigate = useNavigate();

  // vamos construir a  Lógica de autenticação aqui
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login realizado com:", gmail, senha);
  };

  return (
    <div className="layoutlogin-aluno">
      <div className="container-login">
        
        {/* Lado Esquerdo: Identidade Visual */}
        <div className="painel-visual">
          <img src={logoIema} alt="Logo IEMA" />
          
        </div>

        {/* Lado Direito: Formulário */}
        <div className="painel-formulario">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            

            <div className="campo-input">
              <label htmlFor="egmail">Gmail</label>
              <input 
                type="text" 
                id="egmail" 
                placeholder="Digite seu Egmail"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                required 
              />
            </div>

            <div className="campo-input">
              <label htmlFor="senha">Senha</label>
              <input 
                type="password" 
                id="senha" 
                placeholder="********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn-login" onClick={() => window.location.href = "/painelAlunoIEMA"}>Entrar</button>

            <div className="links-auxiliares">
              <a href="/esqueci-minha-senha-aluno">Esqueci minha senha</a>
              <span>Ainda não tem conta? <a href="/cadastroAlunoIEMA">Cadastre-se</a></span>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}