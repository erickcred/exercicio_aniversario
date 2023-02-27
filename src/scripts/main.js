AOS.init();

$(document).ready(function() {
    const dataEvento = new Date("Jul 05, 2023 09:00:00");
    const timeStampEvento = dataEvento.getTime();
    
    let evento = setInterval(function() {
        const dataAtual = new Date();
        const timeStampDataAtual = dataAtual.getTime();
        const tempoParaEvento = timeStampEvento - timeStampDataAtual;
        
        if (tempoParaEvento <= 0) {
            $(".hero__content").text("Evento finalizado");
            clearInterval(evento);
        } else {
            mostraTempoEmTela(tempoParaEvento);
        }
    }, 1000);
    
    function mostraTempoEmTela(timeStampDoEvento) {    
        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
    
        $("#dia").text(
            `${Math.floor(timeStampDoEvento / diaEmMs)}d`
        );
        $("#hora").text(
            `${Math.floor((timeStampDoEvento % diaEmMs) / horaEmMs)}h`
        );
        $("#minutos").text(
            `${Math.floor((timeStampDoEvento % horaEmMs) / minutoEmMs)}m`
        );
        $("#segundos").text(
            `${Math.floor((timeStampDoEvento % minutoEmMs) / 1000)}s`
        );
    }


    $(".form__cadastro").click(function(e) {
        $(e.target.parentNode).addClass("form__cadastro--is-up");
        $(".form__cadastro__input").on("mouseleave", function(e) {
            if($(e.target).val() == "") {
                $(e.target.parentNode).removeClass("form__cadastro--is-up");
            }
        });
    });

    $(".form").on("submit", function(e) {
        e.preventDefault();
    })
    
})

