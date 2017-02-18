(function (window) {
    const reader = require('./read.js');

  $('#submit').click(function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const toRead = $("#toRead").value;
    const voice = $("#voices").value;
    if (toRead.length > 100000) {
      reader.readText('Woah buddy, thats too much text.');
    } else {
      reader.readText(toRead, voice);
    }

  });

  $('#stop').click(function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    reader.stop();
  });

})(window);
