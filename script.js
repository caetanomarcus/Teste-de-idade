let nomeInput = document.getElementById('name');
let lastNameInput = document.getElementById('lastName');
let ageInput = document.getElementById('age');
let yesInput = document.getElementById('yes');
let noInput = document.getElementById('no');
const btn = document.getElementById('btn');
let p2 = document.getElementById('p2');

function Send(nome, lastName, age, yes, no){
    let msgOne = '';
    let msgTwo = '';
    let msgThree = '';
    let msgFour = '';
    if (yesInput.checked){
        yes = true;
        no = false;
    } else if (noInput.checked){
        yes = false;
        no = true;
    } else {
        yes = false;
        no = false;
    }
    if (2021 - anniversary[2] >= 18 && yes && 2021 - anniversary[2] !== 2021){
    msgOne = "Parabéns, você pode dirigir. "
        if (mounth == "01" || mounth == "12" && premio == true){
        msgTwo = 'Nossos meses premiados são Janeiro e Dezembro, parece que você faz aniversário em um desses meses! Você tem direito ao prêmio. '
        }    
    } else if (2021 - anniversary[2] >= 18 && no && 2021 - anniversary[2] !== 2021){
        premio = false;
        msgOne = "Você tem idade para dirigir, mas parece que você não é humano. Apenas humanos podem dirigir, regras do planeta. Desculpe. "
    } else if(2021 - anniversary[2] && yes == false && no == false){
        msgOne = "Você não quer confirmar se é humano ou não. Por favor, confirme. "

    } else if (age == ''){
        msgOne = 'Você não digitou sua idade.'
    } else {
        msgOne = `Você ainda não tem 18 anos. Volte daqui há ${comeBack} anos. `
    };
    if (nome[0] == 'R' || nome[0] == 'r') {
        msgThree = `Que legal, ${nome}, seu nome começa com a letra R! Com certeza você é uma ótima pessoa!`
    }
    if (lastName.length > 6 || nome[0] == 'E'){
        if (lastName.length > 6 && nome[0] != 'E') {
            msgFour = `Fato curioso: seu sobrenome tem mais de 6 letras! Sinta-se especial.`
        } else if (nome[0] == 'E'  && lastName.length <= 6) {
            msgFour = `Temos uma pessoinha especial.  Nomes que começam com a letra E como o seu, ${nome}, são nomes muito bonitos.`
        } else {
            msgFour = ` Parabéns. Parabéns. Parabéns. Você é mesmo indescrítivel, ${nome}. Seu sobrenome tem mais de 6 letras e seu nome começa com E. Estamos impressionados. Parabéns de novo!`
        }
    }
   return (msgOne + msgTwo + msgThree + msgFour);
}

btn.addEventListener('click', function(event){
    event.preventDefault();
    nome = nomeInput.value;
    lastName = lastNameInput.value;
    age = ageInput.value.replaceAll('-','');
    yes = yesInput.value;
    no = noInput.value;
    year = age.slice(0,4);
    day = age.slice(6);
    mounth = age.slice(-4,-2);
    anniversary = [day, mounth, year];
    comeBack = 18 - (2021 - anniversary[2]);
    premio = false;
    p2.innerHTML = Send(nome,lastName, age, yes, no);
    
})