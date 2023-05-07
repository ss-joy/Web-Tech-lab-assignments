const p = document.querySelector("p");
const d = new Date();
p.innerText = d.toLocaleDateString();

const clock = document.querySelector("#clock");
setInterval(() => {
  let dx = new Date();
  clock.innerText = dx.toLocaleTimeString();
}, 1000);
