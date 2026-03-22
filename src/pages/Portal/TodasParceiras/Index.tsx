import { useState, useEffect } from 'react';
import Cabecalho from "../../../components/Cabecalho/Index";
import CarrosselHome from '../../../components/Carrossel/Index';
import BuscadePesquisa from "../../../components/BuscadePesquisa/Index";

// testes de imahns de logos
import logoVale from "../../../imagensdeTeste/logoVale1.png";
import logoAlumar from "../../../imagensdeTeste/Alumar3-1.png";
import logoBrisa from "../../../imagensdeTeste/brisa2-2.png";

import './Styles.css';

//  Simulaçao de estrutura de dados que o ADM vai alimentar via API futuramente
interface Empresa {
  id: number;
  nome: string;
  setor: string;
  logo: string;
  linkVagas?: string;
}

export default function TodasParceiras() {
  // Estado que o ADM vai alimentar via API futuramente
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    // Simulação de dados vindo do banco de dados (ADM)
    const empresasMock = [
      {
        id: 1,
        nome: "Vale",
        setor: "Mineração",
        logo: logoVale,
      },
      {
        id: 2,
        nome: "Alumar",
        setor: "Indústria",
        logo: logoAlumar,
      },
      {
        id: 3,
        nome: "Brisa",
        setor: "Tecnologia",
        logo: logoBrisa,
      },
    ];
    setEmpresas(empresasMock);
  }, []);

  // Lógica de filtro para a busca funcionar
  const empresasFiltradas = empresas.filter(empresa =>
    empresa.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    
    <div className="layout-pagina-Parceiras">
      <Cabecalho />
      <main className="conteudo-principal-Parceiras">
        <CarrosselHome />
        <div className="topo-paginas">
          <h1>Empresas Parceiras</h1>
        </div>

        {/* Passamos o termo de busca para o estado */}
        <BuscadePesquisa onBuscar={(termo) => setTermoBusca(termo)} />

        <section className="grid-parceiras">

          {empresasFiltradas.length > 0 ? (
            empresasFiltradas.map((empresa) => (
              <div key={empresa.id} className="card-parceira">
                <div className="logo-container-parceiro">
                  <img src={empresa.logo} alt={`Logo ${empresa.nome}`} />
                </div>
                <h3>{empresa.nome}</h3>
                <span>{empresa.setor}</span>
                
              </div>
            ))
          ) : (
            <p className="sem-resultados">Nenhuma empresa encontrada com "{termoBusca}"</p>
          )}
        </section>
      </main>
    </div>
  );
}