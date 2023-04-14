// HTML DOM

// Uma página web ""Window" (a própria janela) é composta por 3 coisas: o History, o Documento HTML em si e o Location

// LOCATION

window.location.href  // Esse comando nos dá a URL do site

window.location.pathname // Nos dá tudo que vem após o domínio do site


// HISTORY

window.history.back() // Nos leva para a página anterior


// DOCUMENTO HTML DOM

document.title = "Olá Teste"  //Na parte <head></head>, para mudar o título (metatag <title></title> do HTML) direto.

document.body //Para acessar a seção <body></body> do site.

document.body.innerHTML = <h1>Olá DOM</h1>  //Para inserir um conteúdo ao <body></body> diretamente ao HTML.