const ws281x = require('@bartando/rpi-ws281x-neopixel');

const NUM_LEDS = 1584;

ws281x.init({ count: NUM_LEDS, stripType: ws281x.WS2811_STRIP_GR });

// Just so you don't get blind
ws281x.setBrightness(10);

const waitTime = 1;

// Probably best way to use something like time.sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let offset = 0;

async function colorWipe(color) {
    for (let i = 0; i < NUM_LEDS; i++) {
        ws281x.setPixelColor(i, color);

        //await sleep(waitTime);
    }
    await sleep(waitTime);
    ws281x.show();


    offset = (offset + 1) % NUM_LEDS;
}

// Cycle through 3 main colors
setInterval(async() => {
    await colorWipe({ r: 255, g: 0, b: 0 });
    await colorWipe({ r: 0, g: 255, b: 0 });
    await colorWipe({ r: 0, g: 0, b: 255 });
}, waitTime * NUM_LEDS * 3);

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function() { process.exit(0); });
});