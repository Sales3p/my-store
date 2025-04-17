class Produto {

  constructor() {
    this.id = 1
    this.arrayProdutos = []
  }

  salvar() {
    let produto = this.lerDados()

    if(this.validaCampos(produto)) {
      this.adicionar(produto)
    }

    this.listaTabela()
    this.cancelar()
  }

  listaTabela() {
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for(let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow()

      let td_id = tr.insertCell()
      let td_produto = tr.insertCell()
      let td_preco = tr.insertCell()
      let td_acao = tr.insertCell()

      td_id.innerText = this.arrayProdutos[i].id
      td_produto.innerText = this.arrayProdutos[i].nomeProduto
      td_preco.innerText = this.arrayProdutos[i].preco

      td_id.classList.add('center')
      td_acao.classList.add('center')

      let imgEdit =  document.createElement('img')
      imgEdit.src = 'assets/edit.png'
      td_acao.appendChild(imgEdit)

      let imgTrash =  document.createElement('img')
      imgTrash.src = 'assets/trash.png'
      td_acao.appendChild(imgTrash)
    }
  }

  adicionar(produto) {
    this.arrayProdutos.push(produto)
    this.id++
  }

  lerDados() {
    let produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('produto').value
    produto.preco = document.getElementById('valor').value

    return produto
  }

  validaCampos(produto) {
    let msg = ''

    if(produto.nomeProduto == '') {
      msg += '- Informe o nome do produto \n' 
    }

    if(produto.preco == '') {
      msg += '- Informe o preço do produto \n' 
    }

    if(msg != '') {
      alert(msg)
      return false
    }

    return true
  }

  cancelar() {
    document.getElementById('produto').value = ''
    document.getElementById('valor').value = ''
  }
}

var produto = new Produto()