import { useState, useEffect } from "react";
import "./Styles.css";

type Modulo = {
  titulo: string;
  arquivo: File | null;
};

type Trilha = {
  nome: string;
  descricao: string;
  professores: string;
  modulos: Modulo[];
};

type Props = {
  onChange: (trilha: Trilha) => void;
};

export default function PublicarTrilhas({ onChange }: Props) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [professores, setProfessores] = useState("");
  const [modulos, setModulos] = useState<Modulo[]>([]);

  const adicionarModulo = () => {
    setModulos([...modulos, { titulo: "", arquivo: null }]);
  };

  const removerModulo = (index: number) => {
    setModulos(modulos.filter((_, moduloIndex) => moduloIndex !== index));
  };

  const atualizarTitulo = (index: number, valor: string) => {
    const novos = [...modulos];
    novos[index].titulo = valor;
    setModulos(novos);
  };

  const handleArquivo = (index: number, file: File | null) => {
    const novos = [...modulos];
    novos[index].arquivo = file;
    setModulos(novos);
  };

  // envia tudo pro pai
  useEffect(() => {
    onChange({
      nome,
      descricao,
      professores,
      modulos,
    });
  }, [nome, descricao, professores, modulos]);

  return (
    <div className="trilhas-container-PTrilhas">

      {/* NOME DA TRILHA */}
      <div className="form-group-PTrilhas">
        <label>Nome da trilha</label>
        <input
          type="text"
          placeholder="Ex: Trilha Frontend React"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      {/* PROFESSORES */}
      <div className="form-group-PTrilhas">
        <label>Professores</label>
        <input
          type="text"
          placeholder="Ex: João, Maria..."
          value={professores}
          onChange={(e) => setProfessores(e.target.value)}
        />
      </div>

      {/* DESCRIÇÃO */}
      <div className="form-group-PTrilhas">
        <label>Descrição da trilha</label>
        <textarea
          rows={4}
          placeholder="Descreva o conteúdo da trilha..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>

      {/* MÓDULOS */}
      <div className="form-group-PTrilhas">
        <label>Módulos</label>

        <button
          type="button"
          className="btn-detalhes-PTrilhas"
          onClick={adicionarModulo}
        >
          + Adicionar módulo
        </button>

        {modulos.map((mod, index) => (
          <div key={index} className="modulo-item-PTrilhas">
            <button
              type="button"
              className="btn-remover-modulo-PTrilhas"
              aria-label={`Remover módulo ${index + 1}`}
              onClick={() => removerModulo(index)}
            >
              ×
            </button>

            <input
              type="text"
              placeholder={`Título do módulo ${index + 1}`}
              value={mod.titulo}
              onChange={(e) => atualizarTitulo(index, e.target.value)}
            />

            <input
              type="file"
              accept="application/pdf,video/*"
              onChange={(e) =>
                handleArquivo(index, e.target.files?.[0] || null)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}