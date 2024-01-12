import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import PaginaPadrao from "./components/PaginaPadrao"
import Exemplo1 from "./pages/Exemplo1"
import Exemplo2 from "./pages/Exemplo2"

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route path="exemplo1" element={<Exemplo1 />} />
          <Route path="exemplo2" element={<Exemplo2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
