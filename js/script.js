// ELEMENTOS HTML

// ELEMENTOS AREA GERADOR DE SENHA
const visor = document.querySelector(".gera-senha-visor");
const btnNormal = document.querySelector(".normal");
const btnPreferencial = document.querySelector(".preferencial");
const btnGerenciador = document.querySelector(".gerenciador");

// ELEMENTOS AREA DO TICKET
const tipoTicket = document.querySelector('.gera-senha-ticket-tipo')

//ELEMENTOS DO GERENCIADOR DE SENHA
const gerenciador = document.querySelector(".area-gerenciador");
const xGerenciador = document.querySelector(".fecha-gerenciador");
const btnGNormal = document.querySelector(".gerenciador-normal");
const btnGPreferencial = document.querySelector(".gerenciador-preferencial");



//ELEMENTOS DO MONITOR
const hora = document.querySelector(".hora");
const diaData = document.querySelector(".dia-data");
const diaSemana = document.querySelector(".dia-semana")
const tipoMonitor = document.querySelector('.tipo-monitor');



// FUNÇÕES

// GERADOR DE SENHA
const gerarSenha = (botao) => {
    alert("VOCÊ GEROU UMA SENHA DO TIPO: " + botao.textContent);
    tipoTicket.innerText = botao.textContent;

    let prefixo;

    if(botao.textContent === 'Preferencial'){
      prefixo = 'P -';
    }else{
      prefixo = 'N -';
    }

}

//ABRIR GERENCIADOR DE SENHA
const abreGerenciador = () => {
    gerenciador.classList.add('abrir-gerenciador');
}
//FECHAR GERENCIADOR DE SENHA 
const fechaGerenciador = () => {
    if (window.confirm("Você realmente quer sair do Gerenciador de arquivo?")== true){

        gerenciador.classList.remove('abrir-gerenciador');
    } 
}

//MONITOR
var data = new Date();

//Mostrar dia da semana
const diaSemanaTexto = () =>{
    const semana = data.getDay();
    
    if(semana === 0) {
      diaSemana.innerText='Domingo';
    }
    if(semana === 1) {
      diaSemana.innerText='Segunda-feira';
    }
    if(semana === 2) {
      diaSemana.innerText='Terça-feira';
    }
    if(semana === 3) {
      diaSemana.innerText='Quarta-feira';
    }
    if(semana === 4) {
      diaSemana.innerText='Quinta-feira';
    }
    if(semana === 5) {
      diaSemana.innerText='Sexta-feira';
    }
    if(semana === 6) {
      diaSemana.innerText='sábado';
    }

}


// MOSTRAR HORA
hora.innerText = data.getHours() + " : " + data.getMinutes(); 

//MOSTRAR DIA DA SEMANA
diaSemanaTexto();

//BOTÕES
btnNormal.addEventListener('click', () =>{
  gerarSenha(btnNormal);
});
btnGNormal.addEventListener('click', () =>{
  gerarSenha(btnGNormal);
});
btnPreferencial.addEventListener('click', () =>{
  gerarSenha(btnPreferencial);
});
btnGPreferencial.addEventListener('click', () =>{
  gerarSenha(btnGPreferencial);
});

btnGerenciador.addEventListener('click', abreGerenciador);
xGerenciador.addEventListener('click', fechaGerenciador);

