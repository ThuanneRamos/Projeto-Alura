var listaLivros = []
var listaLivroTitulos = []
var listaLinks = []
var bodyHTML = document.body.innerHTML
//deixar disponível em tudo
var elementoListaLivros = document.getElementById('listaLivros')

function criarCatalogo(livro, livroLink, livroTitulo) {
  elementoListaLivros.innerHTML = ''
  for (var i = 0; i < listaLivros.length; i++) {
    elementoListaLivros.innerHTML += '<div><div><button onClick="removerLivro(' + i + ')"><i class="fa fa-trash" aria-hidden="true"></i></button></div><a href=' + livroLink[i] + '><img src=' + livro[i] + '></a><h3>' + livroTitulo[i] + '</h3></div>'

  }

}
function validar(imagem, link, texto) {
  var formatos = [".jpg", ".png", ".gif", ".tiff", "jpge"]
  var resultado = false

  if (link != "" && texto != "") {
    for (var i = 0; i < formatos.length; i++) {
      if (imagem.endsWith(formatos[i])) {
        resultado = true
      }
    }
  }
  return resultado
}

function adicionarLivro() {

  var livro = document.getElementById('livro').value
  var livroTitulo = document.getElementById('livroTitulo').value
  var livroLink = document.getElementById('livroLink').value

  if (validar(livro, livroTitulo, livroLink)) {

    listaLivroTitulos.push(livroTitulo)
    listaLivros.push(livro)
    listaLinks.push(livroLink)

    document.getElementById('livroTitulo').value = ''
    document.getElementById('livro').value = ''
    document.getElementById('livroLink').value = ''

    criarCatalogo(listaLivros, listaLivroTitulos, listaLinks)

  } else {
    alert('Argumentos inválidos')
  }
}

function removerLivro(id){
  listaLivroTitulos.splice(id, 1)
  listaLivros.splice(id, 1)
  listaLinks.splice(id, 1)

  criarCatalogo(listaLivros, listaLivroTitulos, listaLinks)

}