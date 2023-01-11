function toggleMode(){
    /* documentElement é a representação do documento html em formato de objeto */
    const html = document.documentElement
    /* Se tiver o light, vai remover, se não tiver, vai adicionar */
   html.classList.toggle('light')
   
   //PEgar a tag img
   const img = document.querySelector('#profile img')
   if(html.classList.contains('light')){
       //Se tiver light mode mantem a imagem
        img.setAttribute('src', './assets/Ellipse.png')
    }else{
        //Substituir a imagem
        img.setAttribute('src', './assets/Ellipse2.png')
   }




}