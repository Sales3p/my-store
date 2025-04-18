class Produto {

  constructor() {
    this.id = 1
    this.arrayProdutos = []
    this.editId = null
  }

  salvar() {
    let produto = this.lerDados()

    if(this.validaCampos(produto)) {
      if(this.editId == null) {
        this.adicionar(produto)
      } else {
        this.atualizar(this.editId, produto)
      }
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

      let imgEdit = document.createElement('img')
      imgEdit.src = 'assets/edit.png'
      imgEdit.setAttribute('onClick', 'produto.preparaEdicao('+ JSON.stringify(this.arrayProdutos[i]) +')')

      let imgGap = document.createElement('img')
      imgGap.src = 'assets/gap.png'
      
      let imgTrash = document.createElement('img')
      imgTrash.src = 'assets/trash.png'
      imgTrash.setAttribute('onClick', 'produto.deletar('+ this.arrayProdutos[i].id +')')

      td_acao.appendChild(imgEdit)
      td_acao.appendChild(imgGap)
      td_acao.appendChild(imgTrash)
    }
  }

  adicionar(produto) {
    produto.preco = parseFloat(produto.preco)
    this.arrayProdutos.push(produto)
    this.id++
  }

  atualizar(id, produto) {
    for(let i = 0; i < this.arrayProdutos.length; i++) {
      if(this.arrayProdutos[i].id == id) {
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto
        this.arrayProdutos[i].preco = produto.preco
      }
    }
  }

  preparaEdicao(dados) {
    this.editId = dados.id

    document.getElementById('produto').value = dados.nomeProduto
    document.getElementById('valor').value = dados.preco

    document.getElementById('btn1').innerText = 'Atualizar'
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

    document.getElementById('btn1').innerText = 'Salvar'
    this.editId = null
  }

  deletar(id) {

    if(confirm('Deseja realmente deletar o produto ' + id)) {
      let tbody = document.getElementById('tbody')

      for(let i = 0; i < this.arrayProdutos.length; i++) {
        if(this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1)
          tbody.deleteRow(i)
        }
      }
    }
  }
}

var produto = new Produto()