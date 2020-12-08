const ws281x = require('@bartando/rpi-ws281x-neopixel');

const NUM_LEDS = 1584;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


ws281x.init({ count: NUM_LEDS, stripType: ws281x.WS2811_STRIP_GR });
ws281x.setBrightness(100);
var last = 0;

rl.on('line', (answer) => {
    console.log(answer);
    ws281x.setPixelColor(answer, { r: 100, g: 100, b: 100 });
    ws281x.setPixelColor(last, { r: 0, g: 0, b: 0 });
    ws281x.show();
    last = answer;
});

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function() { process.exit(0); });
});