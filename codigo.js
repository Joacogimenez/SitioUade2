
function calcularTiempoHastaVerano() {
    const ahora = new Date();
    const proximoVerano = new Date(ahora.getFullYear(), 11, 21);

    if (ahora > proximoVerano) {
        proximoVerano.setFullYear(proximoVerano.getFullYear() + 1);
    }

    const diferencia = proximoVerano - ahora;
    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return `${dias}:${horas}:${minutos}:${segundos}`;
}

function actualizarContador() {
    document.getElementById('contador').textContent = calcularTiempoHastaVerano();
}

function iniciarContador() {
    actualizarContador();
    setInterval(actualizarContador, 1000);
}

iniciarContador();