var btn_menu = document.getElementById("btn-menu");
var btn_voltar = document.getElementById("btn-voltar");
var barra_lateral = document.getElementById("barra-lateral");
btn_menu.addEventListener("click", function(){
    barra_lateral.classList.add("display-block")
})
btn_voltar.addEventListener("click", function(){
    barra_lateral.classList.remove("display-block")
})