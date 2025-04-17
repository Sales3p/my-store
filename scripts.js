class Produto {

  constructor() {
    this.id = 0
    this.nomeProduto = ''
    this.valor = 0
  }

  adicionar() {
    alert('O produto foi adicionado!')
  }

  excluir() {
    alert('Item deletado!')
  }
}

var produto = new Produto()