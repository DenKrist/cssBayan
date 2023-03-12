let block1 = document.querySelector(`#block1`);
let block2 = document.querySelector(`#block2`);
let block3 = document.querySelector(`#block3`);
let block4 = document.querySelector(`#block4`);
let block5 = document.querySelector(`#block5`);

let bayanBlock1 = document.querySelector(`.bayanBlock1`);
let bayanBlock2 = document.querySelector(`.bayanBlock2`);
let bayanBlock3 = document.querySelector(`.bayanBlock3`);
let bayanBlock4 = document.querySelector(`.bayanBlock4`);
let bayanBlock5 = document.querySelector(`.bayanBlock5`);

bayanBlock1.addEventListener(`click`, function () {
  block1.classList.toggle(`non-hidden`);
  bayanBlock1.classList.toggle(`black__title`);

})

bayanBlock2.addEventListener(`click`, function () {
  block2.classList.toggle(`non-hidden`)
  bayanBlock2.classList.toggle(`black__title`);
})

bayanBlock3.addEventListener(`click`, function () {
  block3.classList.toggle(`non-hidden`)
  bayanBlock3.classList.toggle(`black__title`);
})

bayanBlock4.addEventListener(`click`, function () {
  block4.classList.toggle(`non-hidden`)
  bayanBlock4.classList.toggle(`black__title`);
})

bayanBlock5.addEventListener(`click`, function () {
  block5.classList.toggle(`non-hidden`)
  bayanBlock5.classList.toggle(`black__title`);
})

