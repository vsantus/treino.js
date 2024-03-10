function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var Fano = document.getElementById('ano');
    var resultado = document.getElementById('resultado');


    if (Fano.value.length == 0 || Fano.value > ano) {
        resultado.style.backgroundColor = "red";
        resultado.innerHTML = "[ERRO] Verifique se os dados inseridos nos campos estão corretos.";
    } else {
        var sex = document.getElementsByName('radio-sex');
        var idade = ano - Fano.value;
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            resultado.style.backgroundColor = "cornflowerblue";
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancaM.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemM.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoM.jpg');
            } else {
                img.setAttribute('src', 'idosoM.jpg');
            }
        } else if (sex[1].checked) {
            genero = "Mulher"
            resultado.style.backgroundColor = "palevioletred";
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancaF.jpg');
            } else if (idade < 21){
                img.setAttribute('src', 'jovemF.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'adultaF.jpg');
            } else {
                img.setAttribute('src', 'idosaF.jpg');
            }
        }
        resultado.innerHTML = `Sua idade é de ${idade} anos e você é ${genero}`
        resultado.appendChild(img)
    }

}