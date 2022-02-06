import React from "react";
import react from "react";
import './App.css';

function App() {
   const criarComboBox = () => {
    const opcoes = ["Azul", "Vermelho"]
    const comboBoxOpcoes = opcoes.map( opcao => <option key={opcao}>{opcao}</option>)
    return ( 
       <select>
         {comboBoxOpcoes}
       </select>
      )
  }

  const MeuCombo = () => criarComboBox();
  return (
    <div className="App">
       <h1>Hello Word1</h1>
       <MeuCombo/>
    </div>
  );
}

// class App extends react.Component {

//   state = {
//     nome : "Fernando"
//   }

//   componentDidMount() {
//     console.log('DidMount')
//   }
//   componentWillUnmount() {
//     console.log('Unmount')
//   }

//   modificarNome = (event) => {
//     this.setState({
//       nome: event.target.value
//     })
//   }
//   criarComboBox = () => {
//     const opcoes = ["Azul", "Vermelho"]
//     const comboBoxOpcoes = opcoes.map( opcao => <option key={opcao}>{opcao}</option>)
//     return ( 
//        <select>
//          {comboBoxOpcoes}
//        </select>
//       )
//   }
//   render() {
//     const MeuCombo = () => this.criarComboBox()
//     console.log('Render')
//     return (
//       <>
//         <div className="App">
//           <input type="text" value={this.state.nome} onChange={this.modificarNome} />
//           <h1>Hello {this.state.nome}</h1>
//           {/* { this.criarComboBox() } */}
//           <MeuCombo key="combo" />
//         </div>
//       </>
//     );
//   }
// }

export default App;
