import react from "react";
import {
    Routes,  
    Route,
  } from "react-router-dom";
import Home from "./view/home"
import CadastroProduto from "./view/produtos/cadastro"
import ConsultaProduto from "./view/produtos/consulta"

export default () => {
    return ( 
        
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cadastro-produto" element={<CadastroProduto />} />
                <Route exact path="/consulta-produto" element={<ConsultaProduto />} />
            </Routes>
        
    )
}