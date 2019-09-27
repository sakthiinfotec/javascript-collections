var net = require ('net');
var textChunk = '';
var i = 0;
var server = net.createServer (socket => {
  const interval = setInterval (() => {
    const dt = new Date ();
    const str = `(${++i}) - ${dt.getFullYear ()}-${dt.getMonth ()}-${dt.getDate ()} ${dt.getHours ()}:${dt.getMinutes ()}:${dt.getSeconds ()}`;
    socket.write (str + '\r');
  }, 500);

  socket.on ('close', () => {
    console.log ('Socket closed');
    clearInterval (interval);
  });
  socket.on ('error', () => {
    console.log ('Socket error!');
    clearInterval (interval);
  });

  socket.on ('data', data => {
    textChunk = data.toString ('utf8');
    console.log (textChunk);
    // socket.write (textChunk);
  });
});
server.listen (54321, '127.0.0.1');

server.on ('connection', () => {
  console.log ('Client connected');
});
