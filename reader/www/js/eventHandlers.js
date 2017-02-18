// const reader = require('./read.js');

// function onLoad() {
//   document.addEventListener('ready', onReady, false);
// };

// function onReady() {
//   document.addEventListener("setupReader", onSetupReader, false);
// }

// function onSetupReader(event) {
//   console.log('Received event also : ', event);
//   event.preventDefault();
//   event.stopPropagation();
//   // const reader = require('.read.js');

//   const submitButton = document.querySelector("#submit");
//   const stopButton = document.querySelector("#stop");

//   submitButton.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     ev.stopPropagation();
//     const toRead = document.getElementById("toRead").value;
//     const voice = document.getElementById("voices").value;
//     if (toRead.length > 100000) {
//       reader.readText('Woah buddy, thats too much text.');
//     } else {
//       reader.readText(toRead, voice);
//     }
//   });

//   stopButton.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     ev.stopPropagation();
//     reader.stop();
//   });
// };
