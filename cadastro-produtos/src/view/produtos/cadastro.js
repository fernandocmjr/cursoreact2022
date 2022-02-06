import React from 'react';

import ProdutoService from "../../app/produtoService"

const stateInitial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: [],
}

class CadastroProduto extends React.Component {

    state = stateInitial;

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    onChange = (event) => {
       const valor = event.target.value;
       const nomeDoCampo = event.target.name;
       this.setState({
           [nomeDoCampo] : valor
       })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        } 
        this.setState({
            errors: [],
            sucesso: false
        })
        try {            
            this.service.salvar(produto)
            this.onClear();
            this.setState({
                sucesso : true
            })
        } catch (error) {
            const errosValidacao = error.errors
            this.setState({
                errors: errosValidacao,
                sucesso: false
            })
        }
    }

    onClear = () => {
        this.setState ( stateInitial);
    }

    onCloseMessage = () => {
        this.setState({
            sucesso : false,
            errors: []
        })
    }
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    Cadastro de Produto
                </div>
                { this.state.sucesso &&
                    (
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={this.onCloseMessage}></button>
                            <strong>Atenção</strong> Cadastro realizado com sucesso
                        </div>
                    )  
                }
                { (this.state.errors.length > 0) &&
                    (
                        this.state.errors.map( msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={this.onCloseMessage}></button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })
                    )  
                }
                <div className='card-body'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input 
                                    type="text" 
                                    name="nome" 
                                    onChange={this.onChange} 
                                    value={this.state.nome} 
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input 
                                    type="text" 
                                    name="sku"  
                                    onChange={this.onChange} 
                                    value={this.state.sku} 
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição: *</label>
                                <textarea 
                                    name="descricao"  
                                    onChange={this.onChange} 
                                    value={this.state.descricao} 
                                    className="form-control" />
                            </div>
                        </div>                         
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input 
                                    name="preco"  
                                    onChange={this.onChange} 
                                    value={this.state.preco} 
                                    type="text" 
                                    className="form-control" />
                            </div>
                        </div>  
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input 
                                    name="fornecedor"  
                                    onChange={this.onChange} 
                                    value={this.state.fornecedor} 
                                    type="text" 
                                    className="form-control" />
                            </div>
                        </div>                         
                    </div>
                    <p></p>
                    <div className="row ">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1">
                            <button onClick={this.onClear} className="btn btn-primary">Limpar</button>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1">
                            <button className="btn btn-success">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default CadastroProduto;