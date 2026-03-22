import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Styles.css";

export type BuscaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBuscar?: (termo: string) => void;
};

export default function BuscadeMinhasCadidaturas({
  placeholder,
  value,
  onChange,
  onBuscar,
}: BuscaProps) {
  const [termoInterno, setTermoInterno] = useState("");

  const isControlado = value !== undefined;
  const valorAtual = isControlado ? value : termoInterno;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlado) {
      setTermoInterno(e.target.value);
    }

    onChange?.(e);
    onBuscar?.(e.target.value);
  };

  const handleBuscarClick = () => {
    onBuscar?.(valorAtual ?? "");
  };

  return (
    <div className="container-busca">
      <input
        className="input-busca"
        type="text"
        placeholder={placeholder}
        value={valorAtual}
        onChange={handleInputChange}
      />

      <button type="button" className="botao-busca" onClick={handleBuscarClick}>
        <FaSearch />
      </button>
    </div>
  );
}