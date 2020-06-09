const audi = document.querySelector(".audi");
let wave = document.querySelector(".wave");
let main = document.querySelector(".further-out");

main.addEventListener("click", () => {
  wave.classList.add("expand");

  // setTimeout(() => {
  //   wave.classList.remove("expand");
  // }, 2000);
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
