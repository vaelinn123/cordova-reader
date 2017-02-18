'use strict';
const say = require('say');

function readText(text, voice) {
  let toUse = voice;
  if(!voice){
    toUse = 'Alex';
  }
  return say.speak(text, toUse);
};

function stop() {
  return say.stop();
}

module.exports = {
  readText,
  stop,
}
