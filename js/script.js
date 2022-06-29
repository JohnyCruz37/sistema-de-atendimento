// ELEMENTOS HTML

// ELEMENTOS AREA GERADOR DE SENHA
const visor = document.querySelector(".gera-senha-visor");
const btnNormal = document.querySelector(".normal");
const btnPreferencial = document.querySelector(".preferencial");
const btnGerenciador = document.querySelector(".gerenciador");

// ELEMENTOS AREA DO TICKET
const tipoTicket = document.querySelector('.gera-senha-ticket-tipo');
const dataTicket = document.querySelector('.gera-senha-ticket-data');
const numeroTicket = document.querySelector('.gera-senha-ticket-numero')

//ELEMENTOS DO GERENCIADOR DE SENHA
const gerenciador = document.querySelector(".area-gerenciador");
const xGerenciador = document.querySelector(".fecha-gerenciador");
const btnGNormal = document.querySelector(".gerenciador-normal");
const btnGPreferencial = document.querySelector(".gerenciador-preferencial");
const filaTodos = document.querySelector('.div-fila');
const filaPreferencial = document.querySelector('.div-preferencial');
const filaNormal = document.querySelector('.div-normal');



//ELEMENTOS DO MONITOR
const hora = document.querySelector(".hora");
const diaData = document.querySelector(".dia-data");
const diaSemana = document.querySelector(".dia-semana")
const tipoMonitor = document.querySelector('.tipo-monitor');

var data = new Date();

//ARRAY
const fila = [];
const filaN = [];
const filaP = [];

//METODO
//Mostrar dia da semana em texto
const diaSemanaTexto = (semana, elemento) =>{
    
  if(semana === 0) {
    elemento.innerText='Domingo';
  }
  if(semana === 1) {
    elemento.innerText='Segunda-feira';
  }
  if(semana === 2) {
    elemento.innerText='Terça-feira';
  }
  if(semana === 3) {
    elemento.innerText='Quarta-feira';
  }
  if(semana === 4) {
    elemento.innerText='Quinta-feira';
  }
  if(semana === 5) {
    elemento.innerText='Sexta-feira';
  }
  if(semana === 6) {
    elemento.innerText='sábado';
  }

}

//CRIANDO O TEXTO DA SENHA
const senhaTexto = (p, array, texto) => {
  if(array.length < 10){
    texto.innerText = p + '00' + array.length;
  }else if(array.length < 100){
    texto.innerText = p + '0'+array.length;
  } else{
    texto.innerText = p + array.length;
  }


}

//ADICIONANDO PREFIXO A SENHA
const tipoSenha = (botao, texto) => {
    let prefixo;
    if(botao.textContent === 'Preferencial'){
      prefixo = 'P -';

      filaP.push(filaP.length + 1)
      senhaTexto(prefixo, filaP, texto);


    }else{
      prefixo = 'N -';

      filaN.push(filaN.length + 1);
      senhaTexto(prefixo, filaN, texto);

    }
}

// FUNÇÕES
// GERADOR DE SENHA
const gerarSenha = (botao) => {
    //FILA
    console.log(fila)
    //TIPO DE ATENDIMENTO
    tipoTicket.innerText = botao.textContent;

    //NÚMERO SENHA
    tipoSenha(botao, numeroTicket);
    
    //DATA SENHA
    diaSemanaTexto(data.getDay(), dataTicket);

    //PREVISÃO DE ESPERA SENHA
  
    

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








//BOTÕES

//botões do gerador de senha
btnNormal.addEventListener('click', () =>{
  gerarSenha(btnNormal);
});
btnPreferencial.addEventListener('click', () =>{
  gerarSenha(btnPreferencial);
});

//botões do gerenciador de senha
btnGerenciador.addEventListener('click', abreGerenciador);
xGerenciador.addEventListener('click', fechaGerenciador);

btnGNormal.addEventListener('click', () =>{
  gerarSenha(btnNormal);
});

btnGPreferencial.addEventListener('click', () =>{
  gerarSenha(btnPreferencial);
});



// MOSTRAR HORA
hora.innerText = data.getHours() + " : " + data.getMinutes(); 

//MOSTRAR DIA DA SEMANA
diaSemanaTexto(data.getDay(), diaSemana);

