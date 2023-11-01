function toggleMode(){
  // pegando html
    const html = document.documentElement
  
  // TROCANDO AS CLASSES

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  html.classList.toggle("light")

  // pegar tag img
 const img = document.querySelector('#profile img')

  // substituir a imagem
 if (html.classList.contains('light')) {

  //se tiver light mode, adicionar a imagem light
 img.setAttribute("src","./assets/avatar-light.png")
 img.setAttribute("alt", "Foto do Mayk de Óculos Escuros")

 } else {

  //se tiver sem ligth mode, manter a imagem normal
img.setAttribute("src","./assets/avatar.png")
 img.setAttribute("alt", "Foto do Mayk") 
}
}