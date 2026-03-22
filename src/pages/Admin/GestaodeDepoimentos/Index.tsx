import { useState } from "react";
import { Trash2 } from "lucide-react";

import BuscadePesquisa from "../../../components/BuscadePesquisa/Index";
import "./Styles.css";

interface Depoimento {
  id: number;
  nome: string;
  curso: string;
  texto: string;
  avatar: string;
  unidadeUema?: string;
  status: "rascunho" | "publicado" | "arquivado";
}

export default function GestaoDepoimentos() {

  const [depoimentos, setDepoimentos] = useState<Depoimento[]>([]);
  const [preview, setPreview] = useState<string>("");
  const [busca, setBusca] = useState("");

  const depoimentosFiltrados = depoimentos.filter(dep =>
    dep.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const [form, setForm] = useState<Omit<Depoimento,"id"|"status">>({
    nome:"",
    curso:"",
    texto:"",
    avatar:"",
    unidadeUema:""
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleFoto(e: React.ChangeEvent<HTMLInputElement>){

    const file = e.target.files?.[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      const base64 = reader.result as string;

      setPreview(base64);

      setForm({
        ...form,
        avatar: base64
      });

    };

    reader.readAsDataURL(file);
  }

  function adicionarDepoimento(e:React.FormEvent){

    e.preventDefault();

    const novoDepoimento: Depoimento = {
      id: Date.now(),
      ...form,
      status:"rascunho"
    };

    setDepoimentos([...depoimentos, novoDepoimento]);

    setForm({
      nome:"",
      curso:"",
      texto:"",
      avatar:"",
      unidadeUema:""
    });

    setPreview("");
  }

  function publicarDepoimento(id:number){

    setDepoimentos(
      depoimentos.map(dep =>
        dep.id === id
          ? {...dep,status:"publicado"}
          : dep
      )
    );

  }

  function arquivarDepoimento(id:number){

    setDepoimentos(
      depoimentos.map(dep =>
        dep.id === id
          ? {...dep,status:"arquivado"}
          : dep
      )
    );

  }

  function removerDepoimento(id:number){
    setDepoimentos(
      depoimentos.filter(dep => dep.id !== id)
    );
  }

  return(

    <main className="dashboard-grid-depoimentos">

      <header className="dashboard-header-depoimentos">

        <div>
          <h1>Gestão de Depoimentos</h1>
          <p>Depoimentos de ex-alunos exibidos no portal público</p>
        </div>

      </header>


      <section className="main-content-depoimentos">

        {/* FORMULÁRIO */}

        <div className="card-container-depoimentos">

          <h3>Cadastrar Depoimento</h3>

          <form className="form-depoimento" onSubmit={adicionarDepoimento}>

            <input
              type="text"
              name="nome"
              placeholder="Nome do ex-aluno"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="curso"
              placeholder="Curso"
              value={form.curso}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="unidadeUema"
              placeholder="Unidade IEMA (opcional)"
              value={form.unidadeUema}
              onChange={handleChange}
            />

            <div className="campo-foto">

              <label>Foto do ex-aluno</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleFoto}
              />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="preview-foto"
                />
              )}

            </div>

            <textarea
              name="texto"
              placeholder="Depoimento do ex-aluno"
              value={form.texto}
              onChange={handleChange}
              required
            />

            <button className="btn-primario">
              Salvar Depoimento
            </button>

          </form>

        </div>


        {/* LISTA */}

        <div className="card-container-depoimentos">

          <BuscadePesquisa
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e)=>setBusca(e.target.value)}
          />

          <h3>Depoimentos Cadastrados</h3>

          <div className="lista-depoimentos">

            {depoimentosFiltrados.length === 0 && (
              <p>Nenhum depoimento cadastrado.</p>
            )}

            {depoimentosFiltrados.map(dep => (

              <div key={dep.id} className="depoimento-item">

                <img src={dep.avatar} alt={dep.nome}/>

                <div className="info-depoimento">

                  <strong>{dep.nome}</strong>

                  <span>{dep.curso}</span>

                  {dep.unidadeUema && (
                    <small>{dep.unidadeUema}</small>
                  )}

                  <p>{dep.texto}</p>

                  <span className={`status-${dep.status}`}>
                    {dep.status}
                  </span>

                </div>

                <div className="acoes-depoimento">

                  <button
                    onClick={()=>publicarDepoimento(dep.id)}
                    className="btn-publicar"
                  >
                    Publicar
                  </button>

                  <button
                    onClick={()=>arquivarDepoimento(dep.id)}
                    className="btn-arquivar"
                  >
                    Arquivar
                  </button>

                  <button
                    onClick={()=>removerDepoimento(dep.id)}
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