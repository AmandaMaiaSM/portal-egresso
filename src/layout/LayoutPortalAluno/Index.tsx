import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBarAluno from "../../components/SideBarAluno/Index";
import HeaderBUsca from "../../components/HeaderdeBusca/Index";
import "./Styles.css";


export default function LayoutPortalAluno() {
    const [menuAberto, setMenuAberto] = useState(true);

    return (
        <div className={`containerLayoutPortalAluno ${menuAberto ? "" : "layout-fechado"}`}>
            {/* Sidebar fixa à esquerda */}
            <SideBarAluno 
                 menuAberto={menuAberto} 
                setMenuAberto={setMenuAberto} 
            />
           
            {/* Área da direita */}
            <div className="main-area">
                <HeaderBUsca />
           
                <main className="content">
                    <Outlet />
                </main>
            </div>
           
        </div>
    );
}