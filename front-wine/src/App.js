import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vinhos from "./pages/Vinhos";
import QuantidadeAvaliacoes from "./pages/QuantidadeAvaliacoes";
import Media from "./pages/Media";
import VinhosMaiorNota from "./pages/VinhosMaiorNota"
import VinhosAvaliados from "./pages/VinhosAvaliados"
import GlobalStyle from './assets/GlobalStyle'
import Usuarios from "./pages/Usuarios";
import Busca from "./pages/Busca";

export default function App() {
  
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vinhosNota' element={<Vinhos/>} />
          <Route path='/usuariosSemAvaliacao' element={<Usuarios/>}/>
          <Route path='/quantidadeAvaliacoes' element={<QuantidadeAvaliacoes/>}/>
          <Route path='/media' element={<Media/>}/>
          <Route path='/vinhosMaiorNota' element={<VinhosMaiorNota/>}/>
          <Route path='/vinhosBemAvaliados' element={<VinhosAvaliados/>}/>
          <Route path='/busca' element={<Busca/>}/>
        </Routes>
      </BrowserRouter>
  )
}
