
var botao = document.querySelector('.ver_mais');

botao.addEventListener('click', function() {
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return botao.textContent = 'Ver menos';
    }

    return botao.textContent = 'Ver mais';

});

/*var btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
    var card2 = getElementById('card2');
    card2.classList.toggle('active');
}); */

