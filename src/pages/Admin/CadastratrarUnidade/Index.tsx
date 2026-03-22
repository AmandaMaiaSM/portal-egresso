import { useState } from "react";
import "./Styles.css";

interface Curso {
  id: number;
  nome: string;
}

interface Unidade {
  id: number;
  nome: string;
  uf: string;
  cidade: string;
  bairro: string;
  endereco: string;
  diretor: string;
  permissao: string;
  senhaAdmin: string;
  cursos: string[];
}

export default function CadastrarUnidade() {

  const [cursos, setCursos] = useState<Curso[]>([]);
  const [novoCurso, setNovoCurso] = useState("");

  const [unidades, setUnidades] = useState<Unidade[]>([]);

  const [senhaGerada, setSenhaGerada] = useState("");

  const [form, setForm] = useState({
    nome: "",
    uf: "",
    cidade: "",
    bairro: "",
    endereco: "",
    diretor: "",
    permissao: "Diretor",
    cursos: [] as string[]
  });

  function gerarSenha() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let senha = "";

    for (let i = 0; i < 8; i++) {
      senha += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }

    setSenhaGerada(senha);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function adicionarCurso() {

    if (!novoCurso) return;

    const curso: Curso = {
      id: Date.now(),
      nome: novoCurso
    };

    setCursos([...cursos, curso]);
    setNovoCurso("");
  }

  function handleCurso(nomeCurso: string) {

    let lista = [...form.cursos];

    if (lista.includes(nomeCurso)) {
      lista = lista.filter(c => c !== nomeCurso);
    } else {
      lista.push(nomeCurso);
    }

    setForm({
      ...form,
      cursos: lista
    });
  }

  function cadastrarUnidade(e: React.FormEvent) {

    e.preventDefault();

    const novaUnidade: Unidade = {
      id: Date.now(),
      nome: form.nome,
      uf: form.uf,
      cidade: form.cidade,
      bairro: form.bairro,
      endereco: form.endereco,
      diretor: form.diretor,
      permissao: form.permissao,
      senhaAdmin: senhaGerada,
      cursos: form.cursos
    };

    setUnidades([...unidades, novaUnidade]);

    setForm({
      nome: "",
      uf: "",
      cidade: "",
      bairro: "",
      endereco: "",
      diretor: "",
      permissao: "Diretor",
      cursos: []
    });

    setSenhaGerada("");
  }

  return (

    <main className="dashboard-grid-unidades">

      <header className="dashboard-header-unidades">
        <div>
          <h1>Cadastrar Unidade IEMA</h1>
          <p>Expansão de unidades educacionais</p>
        </div>
      </header>

      <section className="main-content-unidades">

        <div className="card-container-unidades">

          <h3>Nova Unidade</h3>

          <form className="form-unidade" onSubmit={cadastrarUnidade}>

            <input
              type="text"
              name="nome"
              placeholder="Nome da unidade"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="uf"
              placeholder="UF"
              value={form.uf}
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

            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={form.bairro}
              onChange={handleChange}
            />

            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={form.endereco}
              onChange={handleChange}
            />

            <input
              type="text"
              name="diretor"
              placeholder="Nome do diretor"
              value={form.diretor}
              onChange={handleChange}
            />

            <select
              name="permissao"
              value={form.permissao}
              onChange={handleChange}
            >
              <option value="Diretor">Diretor</option>
              <option value="Coordenador">Coordenador</option>
              <option value="Admin Unidade">Admin Unidade</option>
            </select>

            <h4>Cursos oferecidos</h4>

            <div className="criar-curso">

              <input
                type="text"
                placeholder="Novo curso"
                value={novoCurso}
                onChange={(e) => setNovoCurso(e.target.value)}
              />

              <button
                type="button"
                onClick={adicionarCurso}
                className="btn-primario"
              >
                Adicionar
              </button>

            </div>

            <div className="lista-cursos">

              {cursos.map((curso) => (

                <label key={curso.id}>

                  <input
                    type="checkbox"
                    onChange={() => handleCurso(curso.nome)}
                  />

                  {curso.nome}

                </label>

              ))}

            </div>

            <button
              type="button"
              onClick={gerarSenha}
              className="btn-gerar"
            >
              Gerar senha admin
            </button>

            {senhaGerada && (
              <p className="senha-gerada">
                Senha: {senhaGerada}
              </p>
            )}

            <button className="btn-primario">
              Cadastrar Unidade
            </button>

          </form>

        </div>

      </section>

    </main>

  );
}