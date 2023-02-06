let salario = document.querySelector('input#salario')
let horas = document.querySelector('input#horas')
let resultado = document.querySelector('div#resultado')
let aparecerNaTela = document.querySelector('div.aparecerNaTela')

function calcular() {
    if (salario.value == 0 || horas.value == 0) {
        alert('preencha os dados!')
    } else  {
        aparecerNaTela.classList.remove("aparecerNaTela")

        var s = Number(salario.value)
        var h = Number(horas.value)
        var res = s / h
        
        if (res == 1) { 
            return resultado.innerHTML = `<p>Você ganha míseros $${res} real por hora.</p> \u{1F4B8}` 
        } else if (res > 1 && res < 50) {
            return resultado.innerHTML = `<p>Você ganha míseros $${res} reais por hora.</p>`   
        } else if (res > 50) {
            return resultado.innerHTML = `<p>Você ganha $${res} reais por hora.</p><br>Poxa, você ganha bem! \u{1F4B0} \u{1F4B0} \u{1F4B0}`
        } else if (h > s) {
            return resultado.innerHTML = `<br>Você está trabalhando demais ☠️`
        }
        
    }
    
}   


