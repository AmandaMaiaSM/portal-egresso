
import Cabecalho from '../../../components/Cabecalho/Index';
import CarrosselHome from '../../../components/Carrossel/Index';
import Busca from '../../../components/BuscadePesquisa/Index';
import SecaoNoticias from '../../../components/SecaoNoticias/Index';
import './Styles.css';

export default function TodasNoticias() {
  
  return (
    <div className='layout-pagina-noticias'>
      <Cabecalho />
      <main className="conteudo-principal-noticias">    
        <CarrosselHome /> 
        <Busca onBuscar={(termo) => console.log(termo)} />
        <SecaoNoticias esconderBotao={true} />
      </main>
    </div>
  );
}