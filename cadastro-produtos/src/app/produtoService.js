const PRODUTOS = "_PRODUTOS";

export function ErroValidacao (errors) {
    this.errors = errors
}

export default class ProdutoService {
    validar = (produto) => {

        console.log('Irá validar produto')

        const errors = []
        if (!produto.nome) {
            errors.push('O campo nome é obrigatório')
        }
        if (!produto.sku) {
            errors.push('O campo sku é obrigatório')
        }
        if (!produto.preco || produto.preco <= 0) {
            errors.push('O campo preço é obrigatório e maior que zero')
        }
        if (!produto.fornecedor) {
            errors.push('O campo fornecedor é obrigatório')
        }

        if (errors.length > 0) {
            console.log('com erro')
            throw new ErroValidacao(errors);
        }

    }

    obterProdutos = () => {
        let produtos = localStorage.getItem(PRODUTOS);
        if (!produtos) {
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }
        return produtos
    }
    salvar = (produto) => {

        this.validar(produto);
        let produtos = this.obterProdutos();
        
        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}