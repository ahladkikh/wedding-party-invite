// Функция для обновления таймера обратного отсчёта
function updateCountdown() {
    const weddingDate = new Date(2026, 6, 18, 18, 30, 0); // 18 июля 2026, 18:30:00
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
        // Свадьба уже прошла
        document.querySelector('.days .number').textContent = '0';
        document.querySelector('.hours .number').textContent = '0';
        document.querySelector('.minutes .number').textContent = '0';
        document.querySelector('.seconds .number').textContent = '0';
        return;
    }

    // Рассчитываем дни, часы, минуты, секунды
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновляем DOM
    document.querySelector('.days .number').textContent = days;
    document.querySelector('.hours .number').textContent = hours;
    document.querySelector('.minutes .number').textContent = minutes;
    document.querySelector('.seconds .number').textContent = seconds;
}

// Запускаем таймер при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown(); // Обновляем сразу
    setInterval(updateCountdown, 1000); // Обновляем каждую секунду
});