function menuHamburguer(){
    const menuBurguer = document.getElementById('menu');
    menuBurguer.classList.toggle('open');

    const conteudo = document.getElementById('conteudo');
    conteudo.classList.toggle('hide');
}
