$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Rápidas!","onde você estiver!", "geladas!", "no precinho!",],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });

    // Pergunta a idade ao usuário
var idade = prompt("Quantos anos você tem?");

// Converte a entrada para um número
idade = parseInt(idade);

// Verifica se a idade é 18 anos ou mais
if (idade >= 18) {
    alert("Seja bem-vindo!");
} else {
    // Redireciona para o site da Ambev
    window.location.href = "https://www.ambev.com.br/consumo-responsavel-aviso";
}


     
})    