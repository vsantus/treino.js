let usuario = document.querySelector('#funcionario');
var botao = document.querySelector('#botao');
var resultado = document.querySelector('#resultado')
var agora = new Date();
var horario = agora.getHours();
var minutos = agora.getMinutes();

botao.addEventListener('click', ponto)

function ponto() {
    let funcionario = usuario.value
    if (horario >= 6 && horario < 11) {
        resultado.innerHTML = `Bom Dia ${funcionario}, Registrado às ${horario}:${minutos}`;
    } else if (horario >= 11 && horario < 13) {
        resultado.innerHTML = `Bom Almoço ${funcionario}, Registrado às ${horario}:${minutos}`;
    } else if (horario >= 13 && horario < 17) {
        resultado.innerHTML = `Boa Tarde ${funcionario}, Registrado às ${horario}:${minutos}`;
    } else if (horario > 17 && horario < 19) {
        resultado.innerHTML = `Boa volta para a casa ${funcionario}! <br> Registrado às ${horario}:${minutos}`;
    } else {
        resultado.innerHTML = 'Fora do Horário de serviço'
    }
}