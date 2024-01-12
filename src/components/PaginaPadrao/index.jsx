import { Outlet } from "react-router-dom";
import Saudacao from "../Saudacao";
import CssTipos from "../CssTipos/CssTipos";

// eslint-disable-next-line react/prop-types
export default function PaginaPadrao({children}) {
    return (
        <main>
            <Saudacao />
            <CssTipos />
            <Outlet />
            {children}
        </main>
    )
}