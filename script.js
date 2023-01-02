let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');

function limpar(){
    nome.value = '',
    idade.value = '',
    peso.value = '',
    altura.value = ''

    let formulario = document.querySelector('#formulario');
    if(nome.value = ''){
        formulario.innerHTML = ''
    }
}

function enviar(){

    let nome2 = nome.value
    console.log(nome2);

    let idade2 = idade.value
    console.log(idade2);

    let peso2 = peso.value
    console.log(peso2);

    let altura2 = altura.value
    console.log(altura2);

    let imc = (peso2 / (altura2 * altura2)).toFixed(1)
    console.log(imc);

    let resnome = document.querySelector('#resnome')
    let residade = document.querySelector('#residade')
    let resimc = document.querySelector('#resimc')
    let resnome2 = resnome.value
    let residade2 = residade.value
    let resimc2 = resimc.value

    // if (nome2 == '' || idade2 == '' || peso2 == '' || altura2 == ''){
    //     alert('preencha')
    // }

    resnome.innerHTML = `Bem vindo: ${nome2} !`,
    residade.innerHTML = `${idade2} anos de idade!`

    if(imc < 18){
        resimc.innerHTML = `${imc} - Peso baixo!`
    }else if( imc >=18.5 && imc <= 24.9){
        resimc.innerHTML = `${imc} - Peso normal!`
    }else if( imc >=25 && imc <= 29.9){
        resimc.innerHTML = `${imc} - Sobrepeso!`
    }else if( imc >=30 && imc <= 34.9){
        resimc.innerHTML = `${imc} - Obesidade I!`
    }else{
        resimc.innerHTML = `${imc} - Informe seu peso corretamente!`
    }

    // let resnome = document.querySelector('#resnome')
    // let residade = document.querySelector('#residade')
    // let respeso = document.querySelector('#respeso')
    // let resaltura = document.querySelector('#resaltura')
    // let resnome2 = resnome.value
    // let residade2 = residade.value
    // let respeso2 = respeso.value
    // let resaltura2 = resaltura.value

    //  return resnome2.innerHTML = `Bem vindo: ${nome2} !`,
    // residade.innerHTML = `${idade2} anos!`,
    // residade.innerHTML = `${idade2} anos!`,
    // residade.innerHTML = `${idade2} anos!`
}