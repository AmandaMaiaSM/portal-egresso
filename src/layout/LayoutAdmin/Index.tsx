import { Outlet } from "react-router-dom";
import SideBarAdmin from "../../components/SediBarAdmin/Index";
import "./Styles.css";


import { useState} from "react";

export default function LayoutAdmin() {
  const [menuAberto, setMenuAberto] = useState(true);
  

  return (
    <div className="containerLayoutAdmin">
      <SideBarAdmin
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />

      <main className="mainLayoutAdmin">

      <Outlet />
      </main>
    </div>
  );
}