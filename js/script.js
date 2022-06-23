// ELEMENTOS HTML

// ELEMENTOS AREA GERADOR DE SENHA
const visor = document.querySelector(".gera-senha-visor");
const btnNormal = document.querySelector(".normal");

// ELEMENTOS AREA DO TICKET
const ticketTipo = document.querySelector('.gera-senha-ticket-tipo')

// AREA DO GERADOR DE SENHA

const senhaNormal = () => {
    const msg = 'Gerada senha de atendimento normal';
    visor.innerText = msg;

    ticketTipo.innerText = "Normal";

}

btnNormal.addEventListener('click', senhaNormal);

