const audi = document.querySelector(".audi");
const vid = document.querySelector(".vid");
let wave = document.querySelector(".wave");
let wave2 = document.querySelector(".wave2");
let text = document.querySelector(".start");
let name = document.querySelector(".Name");
let nav = document.querySelector(".navbar");
let main = document.querySelector(".further-out");

main.addEventListener("click", () => {
  wave.classList.add("expand");
  wave2.classList.add("expand");
  text.classList.add("dope");
  setTimeout(() => {
    text.classList.remove("dope");
  }, 9000);
  setTimeout(() => {
    name.classList.add("Name-in");
    nav.classList.add("nav-in");
  }, 2500);
  setTimeout(() => {
    main.classList.add("move");
  }, 300);
  setTimeout(() => {
    wave.classList.remove("expand");
    wave2.classList.remove("expand");
  }, 2000);
});

const start = () => {
  // const key = document.querySelector('.crash1');
  // audi.currentTime = 0;
  audi.play();
  vid.play();
  // key.classList.add('trigger');
};
// const stop = () => {
//   // const key = document.querySelector('.crash1');
//   // audi.currentTime = 0;
//   audi.stop();
//   // key.classList.add('trigger');
// };
