import Cabecalho from "../../components/Cabecalho/Index";
import CarrosselHome from "../../components/Carrossel/Index";
import SecaoDepoimentos from "../../components/SecaoDepoimentos/Index";
import SecaoEmpresas from "../../components/SecaoEmpresas/Index";
import SecaoNoticias from "../../components/SecaoNoticias/Index";
import "./Styles.css";

export default function LayoutPortalBublico() {
    return (
        <div className="containerLayoutPortalPublico">
            <Cabecalho />

            <main className="mainLayoutPortalPublico">
                <CarrosselHome />

                <SecaoNoticias />
                <SecaoEmpresas />
                <SecaoDepoimentos />
            </main>
            {/* RODAPÉ */}

            <footer className="painel-footer">
                <p>&copy; 2024 Portal de Egressos. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}