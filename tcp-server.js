var net = require ('net');

const HOST = '127.0.0.1';
const PORT = 54321;

var textChunk = '';
var i = 0;

var onceStarted = () => {
  console.log('Server is up and running...');
};

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

server.listen (PORT, HOST, onceStarted );

server.on ('connection', () => {
  console.log ('Client connected');
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST, onceStarted);
    }, 2000);
  }
});
