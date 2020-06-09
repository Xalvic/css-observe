const audi = document.querySelector(".audi");
let wave = document.querySelector(".wave");
let wave2 = document.querySelector(".wave2");
let text = document.querySelector(".start");
let main = document.querySelector(".further-out");

main.addEventListener("click", () => {
  wave.classList.add("expand");
  wave2.classList.add("expand");
  text.classList.add("dope");
  setTimeout(() => {
    text.classList.remove("dope");
  }, 9000);
  setTimeout(() => {
    wave.classList.remove("expand");
    wave2.classList.remove("expand");
  }, 2000);
});

const start = () => {
  // const key = document.querySelector('.crash1');
  // audi.currentTime = 0;
  audi.play();
  // key.classList.add('trigger');
};
// const stop = () => {
//   // const key = document.querySelector('.crash1');
//   // audi.currentTime = 0;
//   audi.stop();
//   // key.classList.add('trigger');
// };
