const yes = document.getElementById("yes");
const no = document.getElementById("no");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

// زر No يهرب بعيد عن Yes
document.addEventListener("mousemove", function(e){
    const rectNo = no.getBoundingClientRect();
    const rectYes = yes.getBoundingClientRect();
    const buffer = 120; // المسافة اللي يخاف منها الزر No
    const distX = Math.abs(e.clientX - (rectNo.left + rectNo.width/2));
    const distY = Math.abs(e.clientY - (rectNo.top + rectNo.height/2));
    
    if(distX < buffer && distY < buffer){
        let newX = Math.random() * (window.innerWidth - rectNo.width);
        let newY = Math.random() * (window.innerHeight - rectNo.height);

        // تأكد أن No ما يغطيش Yes
        if(!(newX + rectNo.width < rectYes.left || newX > rectYes.right || newY + rectNo.height < rectYes.top || newY > rectYes.bottom)){
            // إذا قريب من Yes، نحركه على طول أفقي بعيد عنها
            if(newX < rectYes.left) newX = rectYes.left - rectNo.width - 20;
            else newX = rectYes.right + 20;
            // إذا خارج الشاشة نضبطه
            if(newX + rectNo.width > window.innerWidth) newX = window.innerWidth - rectNo.width - 10;
            if(newX < 0) newX = 10;
        }

        no.style.left = newX + "px";
        no.style.top = newY + "px";
        no.style.position = "absolute";
    }
});

// فتح الواجهة الثانية عند الضغط على Yes
yes.onclick = function(){
    screen1.style.display = "none";
    screen2.style.display = "flex";

    // قلوب تتحرك
    for(let i=0;i<25;i++){
        const heart = document.createElement("div");
        heart.className="heart";
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"%";
        heart.style.animationDuration=2+Math.random()*3+"s";
        screen2.appendChild(heart);
    }

    // نجوم تتحرك
    for(let i=0;i<20;i++){
        const star = document.createElement("div");
        star.className="star";
        star.innerHTML="✨";
        star.style.left=Math.random()*100+"%";
        star.style.animationDuration=3+Math.random()*3+"s";
        screen2.appendChild(star);
    }
};
