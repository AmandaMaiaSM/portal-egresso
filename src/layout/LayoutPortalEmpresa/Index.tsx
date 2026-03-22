
import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBarEmpresa from "../../components/SideBarEmpresas/Index";
import HeaderBusca from "../../components/HeaderdeBusca/Index";

import "./Styles.css";

export default function LayoutPortalEmpresa() {
  const [menuAberto, setMenuAberto] = useState(true);

  return (
    <div className={`app-container ${menuAberto ? "" : "layout-fechado"}`}>
      {/* SIDEBAR */}
      <SideBarEmpresa
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />

      {/* ÁREA PRINCIPAL */}
      <div className="main-area-empresa-layout">
        <HeaderBusca />

        <main className="content-empresa-layout">
          <Outlet />
        </main>
      </div>
    </div>
  );
}