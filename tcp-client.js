var net = require ('net');
var client = new net.Socket ();

client.connect (54321, '127.0.0.1', () => {
  console.log ('Connected to Server');
  client.write ('Hello, Server!! Hi from Client!');
});

var i = 0;
client.on ('data', (data) => {
  console.log ('Received from server: ' + data);
  i++;
  if (i == 10) client.end ();
});

client.on('error', (e) => {
  if (e.code === 'ECONNREFUSED') {
    console.log(`Unable to connect to server ${e.address}:${e.port}. Kindly verify connection details!`)
  }
});

client.on ('close', () => {
  console.log ('Connection with server closed!');
});
