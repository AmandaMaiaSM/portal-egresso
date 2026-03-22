import { useState, useEffect } from 'react';
import './Styles.css';

const BotaoTopo = () => {
  const [visivel, setVisivel] = useState(false);

  // Lógica para mostrar o botão apenas após rolar 
  useEffect(() => {
    const toggleVisibilidade = () => {
      if (window.pageYOffset > 300) {
        setVisivel(true);
      } else {
        setVisivel(false);
      }
    };

    window.addEventListener('scroll', toggleVisibilidade);
    return () => window.removeEventListener('scroll', toggleVisibilidade);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="scroll-to-top">
      {visivel && (
        <div onClick={voltarAoTopo} className="botao-topo">
           <i className="seta-cima">↑</i> 
        </div>
      )}
    </div>
  );
};

export default BotaoTopo;