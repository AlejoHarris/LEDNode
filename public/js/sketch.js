var touched = false,
    visible = true,
    fading = false,
    bg = 0,
    first = true,
    firstTouch = true,
    k = 0;
var timed, w, h;
var socket, turn;
let brush = "data:image/png;base64,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"
var ledX = 8,
    ledY = 9;
var kole = 0;
var tempX = 0,
    tempY = 0;
var size = 175;
let slider;

function preload() {
    brush = loadImage(brush);
}

function setup() {
    //var slider = document.getElementById("inSli");
    window.addEventListener("onclick", () => {
        size = slider.value;
        firstTouch = true;
    });

    window.addEventListener("touchend", () => {
        size = slider.value;
        firstTouch = true;
    })




    createCanvas(window.innerWidth, window.innerHeight);
    console.log({ w: window.innerWidth, h: window.innerHeight })
    pixelDensity(1);
    socket = io('http://192.168.1.123:3000', {
        transports: ['websocket'],
        upgrade: false
    });
    socket.on('turn', function(data) {
        turn = data;
    });
    background(0);
    noStroke();
    rectMode(CENTER);
    textSize(width / 10);
    textAlign(CENTER, CENTER);
    frameRate(60);
    slider = createSlider(50, 200, 170, 10);
    w = window.innerWidth / ledX;
    h = (window.innerHeight - 50) / ledY;
    slider.position(window.innerWidth / 2 - slider.width / 2, Math.floor(window.innerHeight - 43 - slider.height / 2));

    window.addEventListener("visibilitychange", (event) => {
        visible = !visible;
        if (!visible) {
            socket.disconnect();
        } else {
            socket = io.connect('http://192.168.1.123:3000');
            socket.on('turn', function(data) {
                turn = data;
            });
        }
    });
}

function draw() {
    console.log(slider)
    if (turn != 0) {
        background(0);
        fill(255);
        text('BUSY', window.innerWidth / 2, window.innerHeight / 2);
        first = true;
        slider.position(window.innerWidth / 2 - slider.width / 2, Math.floor(-100));

    } else {
        if (first) {
            fill(0);
            rect(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight);
            slider.position(window.innerWidth / 2 - slider.width / 2, Math.floor(window.innerHeight - 42 - slider.height / 2));
            first = false;
        }
        w = window.innerWidth / ledX;
        h = (window.innerHeight - 50) / ledY;

        var leds = [];
        loadPixels();
        var xTemp = 7;
        var sign = false;
        for (var i = 0; i < ledX * ledY; i++) {
            var r = (xTemp * floor(w) * 4) + (Math.floor(h) * 4 * Math.floor(i / ledX) * window.innerWidth) + (Math.round(h / 2) * window.innerWidth * 4) + (Math.round(w / 2) * 4);
            if (sign) {
                xTemp++;
            } else {
                xTemp--;
            }
            if (xTemp == 8) {
                sign = false;
                xTemp = 7;
            }
            if (xTemp == -1) {
                xTemp = 0;
                sign = true;
            }
            leds.push({
                id: i,
                r: pixels[Math.floor(r)],
                g: pixels[Math.floor(r) + 1],
                b: pixels[Math.floor(r) + 2],
                a: pixels[Math.floor(r) + 3],
            });
            /*
            pixels[Math.floor(r)] = 255;
            pixels[Math.floor(r) + 1] = 255;
            pixels[Math.floor(r) + 2] = 255;
            pixels[Math.floor(r) + 3] = 255;
            */
        }
        //updatePixels();
        socket.emit('data', leds);
        colorMode(HSB);
        fill((frameCount / 2) % 360, 100, 100, 1);
        rect(window.innerWidth / 2, Math.floor(window.innerHeight - h / 8), window.innerWidth, 25);
        fill(0)
        rect(window.innerWidth / 2, Math.floor(window.innerHeight - h / 8) - 25, window.innerWidth, 25);
        if (touched) {
            display();
        }
    }
}

function mousePressed() {
    if (mouseY < window.innerHeight - 50) {
        touched = true;
    }
}

function mouseClicked() {
    k++;
    if (k >= 2) {
        k = 0;
        colorMode(RGB);
        background(0);
    }
    clearTimeout(timed);
    timed = setTimeout(() => {
        k = 0;
    }, 150);
}

function mouseReleased() {
    touched = false;
    firstTouch = true;
}

function touchStarted() {
    if (mouseY < window.innerHeight - 50) {
        touched = true;
    }

}

function touchEnded() {
    touched = false;
    firstTouch = true;
}

function display() {
    if (tempX != mouseX || tempY != mouseY) {

        if (!fading) {
            if (firstTouch) {
                tempX = mouseX;
                tempY = mouseY;
                firstTouch = false;
            }
            firstTouch = false;
            colorMode(HSB);
            var img = brush;
            size = slider.value();
            img.resize(size, size);
            var len = Math.ceil((dist(tempX, tempY, mouseX, mouseY) / 10));
            var lenX = dist(tempX, tempX, mouseX, mouseX);
            var lenY = dist(tempY, tempY, mouseY, mouseY);
            if (mouseY < tempY) {
                lenY = -lenY;
            }
            if (mouseX < tempX) {
                lenX = -lenX;
            }
            for (var i = 0; i < len; i++) {
                push();
                translate(tempX + i * (lenX / len), tempY + i * (lenY / len));
                rotate(Math.PI / 3);
                tint((frameCount / 2) % 360, 100, 100, 0.01);
                image(img, -img.width / 2, -img.height / 2);
                pop();
            }
        }
    }
    tempX = mouseX;
    tempY = mouseY;
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    background(0);
    slider.position(window.innerWidth / 2 - slider.width / 2, window.innerHeight - 50);
}