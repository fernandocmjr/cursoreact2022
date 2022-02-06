import React from "react";
import ProdutoService from "../../app/produtoService";

class ConsultaProduto extends React.Component {

    state = {
        produtos : []
    }

    constructor() {
        super();
        this.service = new ProdutoService()
    }

    componentDidMount() {
        this.setState({
            produtos : this.service.obterProdutos()
        })
    }

    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    Consulta de Produto
                </div>
                <div className='card-body'>
                    <div className="row"> 
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">SKU</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Fornecedor</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.produtos.map ( (produto, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{produto.nome}</td>
                                                <td>{produto.sku}</td>
                                                <td>{produto.preco}</td>
                                                <td>{produto.fornecedor}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    }
                                    )
                                } 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>        
        )
    }
}

export default ConsultaProduto;