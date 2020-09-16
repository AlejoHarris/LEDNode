const ws281x = require('@bartando/rpi-ws281x-neopixel');
const NUM_LEDS = 1584;

var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, listen);
var clients = [];

ws281x.init({ count: NUM_LEDS, stripType: ws281x.WS2811_STRIP_GRB });

function display(data) {
    for (let i = 0; i < NUM_LEDS; i++) {
        ws281x.setPixelColor(data[i].id, { r: data[i].r * 100 / 255, g: data[i].g * 100 / 255, b: data[i].b * 100 / 255 });
    }
    ws281x.show();
}

function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

var io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
    var clientIp = socket.request.connection.remoteAddress;



    clients.push({ client: socket.id, ip: clientIp });

    console.log('Connected users: ');
    clients.forEach((element) => {
        console.log(element.ip, element.client);
    })
    console.log('Client ' + clientIp + ' connected');
    var clientIndex = clients.findIndex(clients => clients.client == socket.id);
    io.to(socket.id).emit('turn', clientIndex);

    socket.on('data', (data) => {
        display(data);
        //console.log(data);
    });

    socket.on('disconnect', () => {

        var clientIndex = clients.findIndex(clients => clients.client == socket.id);
        clients.splice(clientIndex, 1);
        clients.forEach((element, index) => {
            io.to(element.client).emit('turn', index);
        })
        console.log('Connected users: ' + clients);
        console.log('Client ' + clientIp + ' disconnected');

    })

});