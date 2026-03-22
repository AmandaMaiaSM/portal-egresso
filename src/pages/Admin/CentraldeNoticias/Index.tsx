import { useState } from "react";
import { Trash2 } from "lucide-react";
import "./Styles.css";

interface Noticia {
  id: number;
  tag: string;
  imagem: string;
  titulo: string;
  data: string;
  resumo: string;
  link?: string;
  status: "rascunho" | "publicado" | "arquivado";
}

export default function CentralNoticias() {

  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [preview, setPreview] = useState("");

  const [form, setForm] = useState<Omit<Noticia,"id"|"status">>({
    tag:"",
    imagem:"",
    titulo:"",
    data:"",
    resumo:"",
    link:""
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleImagem(e: React.ChangeEvent<HTMLInputElement>){

    const file = e.target.files?.[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      const base64 = reader.result as string;

      setPreview(base64);

      setForm({
        ...form,
        imagem: base64
      });

    };

    reader.readAsDataURL(file);
  }

  function adicionarNoticia(e: React.FormEvent){

    e.preventDefault();

    const novaNoticia: Noticia = {
      id: Date.now(),
      ...form,
      status:"rascunho"
    };

    setNoticias([...noticias, novaNoticia]);

    setForm({
      tag:"",
      imagem:"",
      titulo:"",
      data:"",
      resumo:"",
      link:""
    });

    setPreview("");
  }

  function publicarNoticia(id:number){

    setNoticias(
      noticias.map(n =>
        n.id === id
          ? {...n,status:"publicado"}
          : n
      )
    );

  }

  function arquivarNoticia(id:number){

    setNoticias(
      noticias.map(n =>
        n.id === id
          ? {...n,status:"arquivado"}
          : n
      )
    );

  }

  function removerNoticia(id:number){
    setNoticias(noticias.filter(n => n.id !== id));
  }

  return(

    <main className="dashboard-grid-noticias">

      <header className="dashboard-header-noticias">

        <div>
          <h1>Central de Notícias</h1>
          <p>Gerencie as notícias exibidas no portal</p>
        </div>

      </header>


      <section className="main-content-noticias">

        {/* FORMULÁRIO */}

        <div className="card-container-noticias">

          <h3>Cadastrar Notícia</h3>

          <form className="form-noticia" onSubmit={adicionarNoticia}>

            <input
              type="text"
              name="tag"
              placeholder="Tag da notícia"
              value={form.tag}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="titulo"
              placeholder="Título da notícia"
              value={form.titulo}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="link"
              placeholder="Link da publicação (opcional)"
              value={form.link}
              onChange={handleChange}
            />

            <div className="campo-imagem">

              <label>Imagem da notícia</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImagem}
              />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="preview-imagem"
                />
              )}

            </div>

            <textarea
              name="resumo"
              placeholder="Resumo da notícia"
              value={form.resumo}
              onChange={handleChange}
              required
            />

            <button className="btn-primario">
              Salvar Notícia
            </button>

          </form>

        </div>


        {/* LISTA */}

        <div className="card-container-noticias">

          <h3>Notícias Cadastradas</h3>

          <div className="lista-noticias">

            {noticias.length === 0 && (
              <p>Nenhuma notícia cadastrada.</p>
            )}

            {noticias.map(n => (

              <div key={n.id} className="noticia-item">

                <img src={n.imagem} alt={n.titulo}/>

                <div className="info-noticia">

                  <span className="tag">{n.tag}</span>

                  <strong>{n.titulo}</strong>

                  <small>{n.data}</small>

                  <p>{n.resumo}</p>

                  {n.link && (
                    <a href={n.link} target="_blank" rel="noopener noreferrer">
                      Ver publicação
                    </a>
                  )}

                  <span className={`status-${n.status}`}>
                    {n.status}
                  </span>

                </div>

                <div className="acoes-noticia">

                  <button
                    onClick={()=>publicarNoticia(n.id)}
                    className="btn-publicar"
                  >
                    Publicar
                  </button>

                  <button
                    onClick={()=>arquivarNoticia(n.id)}
                    className="btn-arquivar"
                  >
                    Arquivar
                  </button>

                  <button
                    onClick={()=>removerNoticia(n.id)}
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