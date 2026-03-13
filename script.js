const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

yesBtn.addEventListener('click', () => {
  screen1.style.display = 'none';
  screen2.style.display = 'block';
});

// زر No يتحرك بدل الاختفاء
noBtn.addEventListener('mouseover', () => {
  const maxX = screen1.clientWidth - noBtn.offsetWidth;
  const maxY = screen1.clientHeight - noBtn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  noBtn.style.position = 'absolute';
  noBtn.style.left = randX + 'px';
  noBtn.style.top = randY + 'px';
});

// ---------- إنشاء القلوب والنجوم المستمرة ----------
function createFloatingElement(symbol, className){
    const el = document.createElement('div');
    el.className = className;
    el.textContent = symbol;
    el.style.left = Math.random()*100 + 'vw'; // موضع عرضي عشوائي
    el.style.fontSize = (20 + Math.random()*20) + 'px'; // حجم عشوائي
    screen2.appendChild(el);

    const duration = 4000 + Math.random()*4000; // سرعة عشوائية

    el.animate([
        { transform: 'translateY(0)', opacity:1 },
        { transform: 'translateY(-120vh)', opacity:0 }
    ], {
        duration: duration,
        iterations: 1,
        easing:'linear'
    }).onfinish = () => {
        el.remove();
        createFloatingElement(symbol, className); // يكرر نفسه بلا توقف
    };
}

// إنشاء عدد كبير من القلوب والنجوم
for(let i=0;i<40;i++){
    setTimeout(()=>createFloatingElement('❤','heart'), i*150);
    setTimeout(()=>createFloatingElement('★','star'), i*200);
               }
