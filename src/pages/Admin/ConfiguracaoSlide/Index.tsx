import { useState } from "react";
import { Trash2 } from "lucide-react";

import "./Styles.css";

interface Slide {
  id: string;
  titulo: string;
  texto: string;
  botao: string;
  imagem: string;
  publicado: boolean;
}

export default function ConfiguracaoSlide() {

  const [slides, setSlides] = useState<Slide[]>([]);
  const [preview, setPreview] = useState("");

  const [form, setForm] = useState({
    titulo: "",
    texto: "",
    botao: "",
    imagem: ""
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleImagem(e: React.ChangeEvent<HTMLInputElement>) {

    const file = e.target.files?.[0];
    if (!file) return;

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

  function adicionarSlide(e: React.FormEvent) {

    e.preventDefault();

    const novoSlide: Slide = {
      id: Date.now().toString(),
      ...form,
      publicado: false
    };

    setSlides([...slides, novoSlide]);

    setForm({
      titulo: "",
      texto: "",
      botao: "",
      imagem: ""
    });

    setPreview("");
  }

  function removerSlide(id: string) {
    setSlides(slides.filter(slide => slide.id !== id));
  }

  function togglePublicacao(id: string) {

    setSlides(
      slides.map(slide =>
        slide.id === id
          ? { ...slide, publicado: !slide.publicado }
          : slide
      )
    );

  }

  function moverParaCima(index: number) {

    if (index === 0) return;

    const novaLista = [...slides];

    [novaLista[index], novaLista[index - 1]] =
      [novaLista[index - 1], novaLista[index]];

    setSlides(novaLista);
  }

  function moverParaBaixo(index: number) {

    if (index === slides.length - 1) return;

    const novaLista = [...slides];

    [novaLista[index], novaLista[index + 1]] =
      [novaLista[index + 1], novaLista[index]];

    setSlides(novaLista);
  }

  return (

    <main className="dashboard-grid-slides">

      <header className="dashboard-header-slides">

        <div>
          <h1>Configuração do Carrossel</h1>
          <p>Gerencie os slides exibidos na página inicial</p>
        </div>

      </header>


      <section className="main-content-slides">

        {/* FORMULÁRIO */}

        <div className="card-container-slides">

          <h3>Adicionar Slide</h3>

          <form className="form-slide" onSubmit={adicionarSlide}>

            <input
              type="text"
              name="titulo"
              placeholder="Título do slide"
              value={form.titulo}
              onChange={handleChange}
              required
            />

            <textarea
              name="texto"
              placeholder="Texto do slide"
              value={form.texto}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="botao"
              placeholder="Texto do botão"
              value={form.botao}
              onChange={handleChange}
              required
            />

            <div className="campo-imagem-slide">

              <label>Imagem do slide</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImagem}
              />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="preview-slide"
                />
              )}

            </div>

            <button className="btn-primario">
              Adicionar Slide
            </button>

          </form>

        </div>


        {/* LISTA DE SLIDES */}

        <div className="card-container-slides">

          <h3>Slides Cadastrados</h3>

          <div className="lista-slides">

            {slides.length === 0 && (
              <p>Nenhum slide cadastrado.</p>
            )}

            {slides.map((slide, index) => (

              <div key={slide.id} className="slide-item">

                <img src={slide.imagem} alt={slide.titulo} />

                <div className="info-slide">

                  <strong>{slide.titulo}</strong>

                  <p>{slide.texto}</p>

                  <span className={slide.publicado ? "status-publicado" : "status-rascunho"}>
                    {slide.publicado ? "Publicado no portal" : "Rascunho"}
                  </span>

                </div>

                <div className="acoes-slide">

                  <button
                    onClick={() => togglePublicacao(slide.id)}
                    className="btn-publicar"
                  >
                    {slide.publicado ? "Despublicar" : "Publicar"}
                  </button>

                  <button onClick={() => moverParaCima(index)}>↑</button>

                  <button onClick={() => moverParaBaixo(index)}>↓</button>

                  <button
                    onClick={() => removerSlide(slide.id)}
                    className="btn-remover"
                  >
                    <Trash2 size={18} />
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