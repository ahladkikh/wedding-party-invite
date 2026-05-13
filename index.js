const timingDetails = {
  default: [
    ['10', '30'],
  ],
  custom: [
    ['18', '30', 'собираемся'],
    ['19', '00', 'тусуемся'],
    ['23', '00', 'расходимся'],
  ]
};

// Функция для обновления таймера обратного отсчёта
function updateCountdown([h, m]) {
  const weddingDate = new Date(2026, 6, 18, h, m, 0); // 18 июля 2026, [hours]:[minutes]:00
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
document.addEventListener('DOMContentLoaded', function () {
  const flag = location.hash.includes('friends');

  if (flag) {
    const scheduleItems = document.querySelectorAll('.schedule-item');
    scheduleItems.forEach((item, index) => {
      const [hours, minutes, text] = timingDetails.custom[index];
      item.querySelector('.time').textContent = `${hours}:${minutes}`;
      item.querySelector('.event').textContent = text;
    });
  } else {
    document.querySelector('.dress-code').remove();
  }

  const countdownParams = flag ? timingDetails.custom[0].slice(0, 2).map(Number) : timingDetails.default[0].map(Number);
  updateCountdown(countdownParams); // Обновляем сразу
  setInterval(() => updateCountdown(countdownParams), 1000); // Обновляем каждую секунду
});