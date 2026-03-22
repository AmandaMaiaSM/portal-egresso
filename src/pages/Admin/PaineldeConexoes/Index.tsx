import { useState } from "react";
import { Trash2 } from "lucide-react";

import BuscadePesquisa from "../../../components/BuscadePesquisa/Index";
import "./Styles.css";

interface Empresa {
  id: string;
  nome: string;
  setor: string;
  logo: string;
  linkVagas?: string;
  status: "rascunho" | "publicado" | "arquivado";
}

export default function PainelDeConexoes() {

  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [preview, setPreview] = useState("");
  const [busca, setBusca] = useState("");

  const empresasFiltradas = empresas.filter(emp =>
    emp.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const [form, setForm] = useState<Omit<Empresa,"id"|"status">>({
    nome:"",
    setor:"",
    logo:"",
    linkVagas:""
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleLogo(e: React.ChangeEvent<HTMLInputElement>){

    const file = e.target.files?.[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      const base64 = reader.result as string;

      setPreview(base64);

      setForm({
        ...form,
        logo: base64
      });

    };

    reader.readAsDataURL(file);
  }

  function adicionarEmpresa(e: React.FormEvent){

    e.preventDefault();

    const novaEmpresa: Empresa = {
      id: Date.now().toString(),
      ...form,
      status:"rascunho"
    };

    setEmpresas([...empresas, novaEmpresa]);

    setForm({
      nome:"",
      setor:"",
      logo:"",
      linkVagas:""
    });

    setPreview("");
  }

  function publicarEmpresa(id:string){

    setEmpresas(
      empresas.map(emp =>
        emp.id === id
          ? {...emp,status:"publicado"}
          : emp
      )
    );

  }

  function arquivarEmpresa(id:string){

    setEmpresas(
      empresas.map(emp =>
        emp.id === id
          ? {...emp,status:"arquivado"}
          : emp
      )
    );

  }

  function removerEmpresa(id:string){
    setEmpresas(empresas.filter(emp => emp.id !== id));
  }

  return(

    <main className="dashboard-grid-painel-conexoes">

      <header className="dashboard-header-conexoes">

        <div>
          <h1>Painel de Conexões</h1>
          <p>Empresas parceiras do portal</p>
        </div>

      </header>


      <section className="main-content-conexoes">

        {/* CADASTRO */}

        <div className="card-container-conexoes">

          <h3>Cadastrar Empresa</h3>

          <form className="form-empresa" onSubmit={adicionarEmpresa}>

            <input
              type="text"
              name="nome"
              placeholder="Nome da empresa"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="setor"
              placeholder="Setor da empresa"
              value={form.setor}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="linkVagas"
              placeholder="Link de vagas (opcional)"
              value={form.linkVagas}
              onChange={handleChange}
            />

            <div className="campo-logo">

              <label>Logo da empresa</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleLogo}
              />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="preview-logo"
                />
              )}

            </div>

            <button className="btn-primario">
              Salvar Empresa
            </button>

          </form>

        </div>


        {/* LISTA */}

        <div className="card-container-conexoes">

          <BuscadePesquisa
            placeholder="Buscar empresa..."
            value={busca}
            onChange={(e)=>setBusca(e.target.value)}
          />

          <h3>Empresas Cadastradas</h3>

          <div className="lista-empresas-conexoes">

            {empresasFiltradas.length === 0 && (
              <p>Nenhuma empresa cadastrada.</p>
            )}

            {empresasFiltradas.map(emp => (

              <div key={emp.id} className="empresa-item-conexoes">

                <img src={emp.logo} alt={emp.nome}/>

                <div className="info-empresa-conexoes">

                  <strong>{emp.nome}</strong>

                  <span>{emp.setor}</span>

                  {emp.linkVagas && (
                    <a href={emp.linkVagas} target="_blank" rel="noopener noreferrer">
                      Ver vagas
                    </a>
                  )}

                  <span className={`status-${emp.status}`}>
                    {emp.status}
                  </span>

                </div>

                <div className="acoes-empresa">

                  <button
                    onClick={()=>publicarEmpresa(emp.id)}
                    className="btn-publicar"
                  >
                    Publicar
                  </button>

                  <button
                    onClick={()=>arquivarEmpresa(emp.id)}
                    className="btn-arquivar"
                  >
                    Arquivar
                  </button>

                  <button
                    onClick={()=>removerEmpresa(emp.id)}
                    className="btn-remover"
                  >
                    <Trash2 size={18}/>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  )
}