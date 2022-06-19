const declOfNum = (n, titles) => {
  return (
    n +
    ' ' +
    titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ]
  );
};

const timer = () => {
  const timer = document.querySelector('.timer');
  const timerText = document.querySelector('.timer__text');
  const timerCount = document.querySelector('.timer__count');

  timerText.textContent = 'До Нового Року залишилося:';

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {
    const deadLine = new Date(2023, 00, 01, 0, 0, 0);
    const now = new Date();

    const timeRemaining = (deadLine - now) / 1000;

    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const days = Math.floor((timeRemaining / 60 / 60 / 24) % 365);

    const s = declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
    const m = declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
    const h = declOfNum(hours, ['година', 'годин', 'годин']);
    const d = declOfNum(days, ['день', 'дня', 'днів']);

    timerCount.textContent = `${d} ${h} ${m} ${s}`;

    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
    }
  };
  startTimer();
};

timer();
