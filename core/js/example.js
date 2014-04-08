/* jshint browser:true */
/* global _, $ */

(function() {

'use strict';

var goinstant = window.goinstant;
var url = window.connectUrl || 'https://goinstant.net/cmac/app';

goinstant.connect(url, function(err, conn, room) {
  if (err) {
    throw err;
  }

  window.conn = conn;
  window.room = room;

  console.log('Connected. room:', room.name);
});

})();
