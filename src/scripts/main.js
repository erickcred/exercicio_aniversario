const dataEvento = new Date("Jul 05, 2023 09:00:00");
const timeStampEvento = dataEvento.getTime();

let evento = setInterval(function() {
    const dataAtual = new Date();
    const timeStampDataAtual = dataAtual.getTime();
    const tempoParaEvento = timeStampEvento - timeStampDataAtual;

    mostraTempoEmTela(tempoParaEvento);
}, 1000);

function mostraTempoEmTela(timeStampDoEvento) {
    const diaHtml = document.getElementById("dia");
    const horaHtml = document.getElementById("hora");
    const minutoHtml = document.getElementById("minutos");
    const segundoHtml = document.getElementById("segundos");

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(timeStampDoEvento / diaEmMs);
    const horas = Math.floor((timeStampDoEvento % diaEmMs) / horaEmMs);
    const minutos = Math.floor((timeStampDoEvento % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((timeStampDoEvento % minutoEmMs) / 1000);

    diaHtml.innerHTML = `${dias}d`;
    horaHtml.textContent = `${horas}h`;
    minutoHtml.innerHTML = `${minutos}m`;
    segundoHtml.innerHTML = `${segundos}s`;
}
