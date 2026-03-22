import logoIEMA from "../../assets/logoIEMA02-3.png";
//import BuscadePesquisa from "../BuscadePesquisa/Index";
import "./Styles.css";

export default function HeaderAluno() {

 /* const handleBuscar = (termo: string) => {
    console.log("Buscando por:", termo);
  };*/

  return (
    <header className="header-aluno">
      <div className="header-left">
        <img src={logoIEMA} alt="Logo IEMA" className="logo-header" />
      </div>
    </header>
  );
}