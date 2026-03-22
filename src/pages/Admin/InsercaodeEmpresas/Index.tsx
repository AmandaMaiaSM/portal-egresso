import { useState } from "react";
import "./Styles.css";

interface EmpresaCadastro {
  nome_fantasia: string;
  cnpj: string;
  setor: string;
  cidade: string;
  email: string;
  status: "Ativo" | "Inativo";
}

export default function InsercaoDeEmpresas() {

  const [empresas,setEmpresas] = useState<any[]>([]);

  const [form,setForm] = useState<EmpresaCadastro>({
    nome_fantasia:"",
    cnpj:"",
    setor:"",
    cidade:"",
    email:"",
    status:"Ativo"
  });

  const [erroCnpj,setErroCnpj] = useState("");

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }

  /* validação simples de CNPJ */

  function validarCNPJ(cnpj:string){

    const apenasNumeros = cnpj.replace(/\D/g,"");

    if(apenasNumeros.length !== 14){
      setErroCnpj("CNPJ inválido");
      return false;
    }

    setErroCnpj("");
    return true;
  }

  function cadastrarEmpresa(e:React.FormEvent){

    e.preventDefault();

    if(!validarCNPJ(form.cnpj)) return;

    const novaEmpresa = {
        tb05id: Date.now(),
        ...form,

        usuario_temp: form.email,
        senha_temp: Math.random().toString(36).slice(-8)
    };

    setEmpresas([...empresas,novaEmpresa]);

    setForm({
      nome_fantasia:"",
      cnpj:"",
      setor:"",
      cidade:"",
      email:"",
      status:"Ativo"
    });

  }

  return(

    <main className="dashboard-grid-insercao">

      <header className="dashboard-header-insercao">

        <div>
          <h1>Inserção de Empresas</h1>
          <p>Cadastro de empresas no portal</p>
        </div>

      </header>

      <section className="main-content-insercao">

        {/* FORMULÁRIO */}

        <div className="card-container-insercao">

          <h3>Cadastro de Empresa</h3>

          <form className="form-empresa-insercao" onSubmit={cadastrarEmpresa}>

            <input
            type="text"
            name="nome_fantasia"
            placeholder="Nome Fantasia"
            value={form.nome_fantasia}
            onChange={handleChange}
            required
            />

            <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={form.cnpj}
            onChange={handleChange}
            required
            />

            {erroCnpj && <span className="erro">{erroCnpj}</span>}

            <input
            type="text"
            name="setor"
            placeholder="Setor"
            value={form.setor}
            onChange={handleChange}
            required
            />

            <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            />

            <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChange={handleChange}
            required
            />

            <select
            name="status"
            value={form.status}
            onChange={handleChange}
            >

              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>

            </select>

            <button className="btn-primario">
              Criar Empresa
            </button>

          </form>

        </div>

        {/* LISTA */}

        <div className="card-container-insercao">

          <h3>Empresas Cadastradas</h3>

          <div className="lista-empresas-insercao">

            {empresas.map(emp =>(

              <div key={emp.tb05id} className="empresa-item-insercao">

                <div className="info-empresa">

                  <strong>{emp.nome_fantasia}</strong>

                  <span>{emp.cnpj}</span>

                  <p>{emp.email}</p>

                  <small>{emp.setor} • {emp.cidade}</small>

                  <small>{emp.setor} • {emp.cidade}</small>

                  <p>Status: {emp.status}</p>

                  <div className="login-temp">

                    <span>Usuário:</span> {emp.usuario_temp}

                    <span>Senha:</span> {emp.senha_temp}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  )

}