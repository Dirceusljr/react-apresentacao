import { Outlet } from "react-router-dom";
import Saudacao from "../Saudacao";

export default function PaginaPadrao({children}) {
    return (
        <main>
            <Saudacao />
            <Outlet />
            {children}
        </main>
    )
}