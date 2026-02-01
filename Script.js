const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

const messages = [
  "Are you sure? 🥺",
  "The cats will be sad 🐱💔",
  "Think again please 😭",
  "They practiced cuddling 😳🐾",
  "Okay… asking again 😌💖"
];

let count = 0;

noBtn.addEventListener("click", () => {
  count++;
  message.textContent = messages[count % messages.length];

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" 
           style="width:200px; border-radius:16px;">
      <h1>YAYYY!! 🥰💖</h1>
      <p>The cats approve this Valentine 🐱🐱✨</p>
      <p>💘🌹😊</p>
    </div>
  `;
});
