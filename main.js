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

setInterval (clock, 1000);

function off() {
  document.getElementById("display").style.backgroundColor = "#000";
    document.getElementById("c").style.backgroundColor = "#000";
     document.getElementById("btns").style.backgroundColor = "#000";
      document.getElementById("btn").style.backgroundColor = "#000";
       document.getElementById("btn2").style.backgroundColor = "#000";
        document.getElementById("btn3").style.backgroundColor = "#000";
         document.getElementById("btn4").style.backgroundColor = "#000";
}

const botaoSom = document.querySelector('#btnSom');
const som = new Audio('./camShot.mp3');

botaoSom.addEventListener('click', function() {
  som.play();
});
