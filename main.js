const form = document.querySelector('form')

const limparFormulario = document.querySelector('form')

const p = document.querySelectorAll('p')

function valida() {
    const campoA = document.querySelector('#campoA')
    const campoB = document.querySelector('#campoB')

    const invalido = campoA.value < campoB.value;

    if(invalido) {
        p[0].classList.add('invalido');
        p[0].style.display = 'block';
        p[1].classList.remove('valido');
        p[1].style.display = 'none';
    
    } else {

        p[0].classList.remove('invalido');
        p[0].style.display = 'none'
        p[1].classList.add('valido');
        p[1].style.display = 'block';
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    valida();
})
