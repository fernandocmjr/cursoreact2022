import React from "react";
import Navbar from './components/navbar';
import { BrowserRouter } from "react-router-dom";
import Rotas from './rotas';

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Rotas />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
