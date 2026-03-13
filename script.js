const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

yesBtn.addEventListener('click', () => {
  screen1.style.display = 'none';
  screen2.style.display = 'block';
});

// تحريك زر No بدل الاختفاء
noBtn.addEventListener('mouseover', () => {
  const maxX = screen1.clientWidth - noBtn.offsetWidth;
  const maxY = screen1.clientHeight - noBtn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  noBtn.style.position = 'absolute';
  noBtn.style.left = randX + 'px';
  noBtn.style.top = randY + 'px';
});
