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
       document.getElementById("btnSom").style.backgroundColor = "#000";
        document.getElementById("btnSom2").style.backgroundColor = "#000";
         document.getElementById("btnSom3").style.backgroundColor = "#000";
        document.getElementById("btnSom4").style.backgroundColor = "#000";

}

const botaoSom = document.querySelector('#btnSom');
const som = new Audio('./camShot.mp3');

botaoSom.addEventListener('click', function() {
  som.play();
});


const botaoSom2 = document.querySelector('#btnSom2');
const som2 = new Audio('./mel.mp3');

botaoSom2.addEventListener('click', function() {
  som2.play();
});



const botaoSom3 = document.querySelector('#btnSom3');
const som3 = new Audio('./telefone.mp3');

botaoSom3.addEventListener('click', function() {
  som3.play();
});
