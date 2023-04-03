function clock () {
    const areaDoRelogio = document.querySelector(".display");
    const horaAgora = new Date();
    const hours = horaAgora.getHours ();
    const minutes = horaAgora.getMinutes ();
    const seconds = horaAgora.getSeconds ();
    const formatoHoras = hours.toString ().padStart(2, "0");
    const formatoMinutos = minutes.toString ().padStart(2, "0");
    const formatoSegundos = seconds.toString ().padStart(2, "0");
    
    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

}

setInterval (clock, 1000)