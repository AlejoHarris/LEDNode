console.log("Made by @alejo.harris")

var touched = false,
    visible = true,
    fading = false,
    bg = 0,
    first = true,
    firstTouch = true,
    k = 0,
    wait = true;
var timed, w, h;
var socket, turn;
let brush = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTE2VDIwOjAxOjE1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA5LTE2VDIwOjAxOjE1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0xNlQyMDowMToxNSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYjc2MDc3Mi1mMTc0LWJlNGUtODcyNy00YmQyNzJmMmFkZjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjM2NkYTBlMi05MTQ3LWFhNDEtOWYzMy05MjdiNWY2YmQ3ZWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkMTNiZjMxMi1mODQ1LTE3NGQtOWRiYS04OWVlZjBmNmRlZmIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQxM2JmMzEyLWY4NDUtMTc0ZC05ZGJhLTg5ZWVmMGY2ZGVmYiIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0xNlQyMDowMToxNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjc2MDc3Mi1mMTc0LWJlNGUtODcyNy00YmQyNzJmMmFkZjciIHN0RXZ0OndoZW49IjIwMjAtMDktMTZUMjA6MDE6MTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5N4CJIAAAQAUlEQVR4nLVc25LjOg5jLjP7/797pjvZhzPMwDAAMpldVblsXSzLhEBQcrovz+ezhnT5oOzd+nfzLl2qyr0Qlz8XdemeTb+pTKaLAKRf/kl51UaVbYy7BcABsQFoMowy+uY63Z/ar+oZkOlFP5nZjhnT9cS4LueX4zL18g/Kb4HagpTapPK6i4bvgrJpk9gzgZHKsY8nlXVSRryaepXaJsk27E2mPq1rTS5Llb2jDXjPVJ5YkfpPLz65Hy7j8qeoc/dP+e04TwzZ6gXXJaM5o18W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";
var ledX = 33,
    ledY = 48;
var kole = 0;
var tempX = 0,
    tempY = 0;
var size = 175;
let slider;
let img;
let kk = true;
var lastCheck = false;
var check = false;


function preload() {
    brush = loadImage(brush);
}

function setup() {
    slider = document.getElementById("slidecontainer");
    btn = document.getElementById("btn");

    //console.log(btn)

    btn.addEventListener("click", () => {
        background(0);
        //console.log('test')
    });

    slider.addEventListener("touchmove", () => {
        size = document.getElementById("myRange").value;
        firstTouch = true;
        k = 0;

    });

    slider.addEventListener("touchend", () => {
        size = document.getElementById("myRange").value;
        firstTouch = false;
        k = 0;
    })

    createCanvas(window.innerWidth, window.innerHeight);
    //console.log({ w: width, h: height });
    pixelDensity(1);
    socket = io('http://fp.com:3000', {
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
    //slider = createSlider(50, 200, 170, 10);
    w = width / ledX;
    h = (height - 50) / ledY;
    //slider.position(width / 2 - slider.width / 2, Math.floor(height - 43 - slider.height / 2));

    window.addEventListener("visibilitychange", (event) => {
        visible = !visible;
        if (!visible) {
            socket.disconnect();
        } else {
            socket = io.connect('http://fp.com:3000');
            socket.on('turn', function(data) {
                turn = data;
            });
        }
    });
}

function draw() {
    lastCheck = check;
    if (turn != 0) {
        background(0);
        fill(255);
        text('BUSY', width / 2, height / 2);
        document.getElementById("slidecontainer").style.display = "none";
        first = true;

    } else {
        document.getElementById("slidecontainer").style.display = "flex";
        if (first) {
            fill(0);
            rect(width / 2, height / 2, width, height);
            first = false;
        }
        w = Math.floor((width / ledX));
        h = Math.floor((height - 100) / ledY);
        var leds = [];
        loadPixels();
        var xTemp = 0;
        var sign = true;
        if (wait) {
            wait = false;
            setTimeout(() => { wait = true; }, 100);
            for (var i = 0; i < ledX * ledY; i++) {
                var r = h * 4 * width + width * 4 - (4 * w) + (4 * h * width * xTemp) - (4 * w * Math.floor(i / ledY)) + (80 * 4 * width);
                if (sign) {
                    xTemp++;
                } else {
                    xTemp--;
                }
                if (xTemp == ledY) {
                    sign = false;
                    xTemp = ledY - 1;
                }
                if (xTemp == -1) {
                    xTemp = 0;
                    sign = true;
                }
                leds.push({
                    id: i,
                    r: pixels[Math.floor(r)],
                    g: pixels[Math.floor(r) + 1],
                    b: pixels[Math.floor(r) + 2]
                });
                /*
                pixels[Math.floor(r)] = 255;
                pixels[Math.floor(r) + 1] = 0;
                pixels[Math.floor(r) + 2] = 0;
                pixels[Math.floor(r) + 3] = 255;*/
            }
            //updatePixels();
            if (kk) {
                //console.log(leds);
                kk = false;
            }
            socket.emit('data', leds);
        }
        colorMode(HSB);
        fill((frameCount / 2) % 360, 100, 100, 1);
        rect(width / 2, 12, width, 25);
        if (touched) {
            display();
        }
    }
}

function mousePressed() {
    if (mouseY < height - 50) {
        touched = true;
    }
}

function mouseReleased() {
    touched = false;
    firstTouch = true;
}

function touchStarted() {
    if (mouseY < height - 50) {
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
            size = document.getElementById("myRange").value;
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
                tint((frameCount / 2) % 360, 100, 100, 0.02);
                image(img, -img.width / 2, -img.height / 2);
                pop();
            }
        }
    }
    tempX = mouseX;
    tempY = mouseY;

}

function windowResized() {
    resizeCanvas(width, height);
    background(0);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}