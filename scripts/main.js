function countdown() {
    const now = new Date();
    const distance = countDownDate - now;
    // Utiliza a countDownDate definida globalmente

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Atualize o valor de tempo no HTML
    document.getElementById("days").innerText = days;
    document.getElementById("time").textContent = formattedTime;
}

// Data final (ajuste para a data desejada)
const countDownDate = new Date("March 19, 2027 00:00:00").getTime();

// Atualiza o contador a cada segundo
setInterval(countdown, 1000);

// Função para garantir que sempre mostre dois dígitos
function padZero(num) {
    return num < 10 ? "0" + num : num;
}