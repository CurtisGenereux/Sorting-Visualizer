var array = [];
var sizeOfArray = 100;
var complete = true;
var barColor = '#635bff';
var delayTime = 10; // in ms

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function newArray() {
    array = [];
    for (var i = 0; i < sizeOfArray; i++) {
        var randomNum = getRandomNum(1, 100);
        array[i] = randomNum;
    }
}

async function delay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startSort(type) {
    if (complete == true) {
        type();
    }
}

async function reset() {

    clearInterval(delay);

    var lastColor = barColor;
    // don't pick the same color twice
    var num = getRandomNum(1, 4);
    if (num == 1 && lastColor != '#e82127') {
        barColor = '#e82127';
    } else if (num == 2 && lastColor != '#00c805') {
        barColor = '#00c805';
    } else if (num == 3 && lastColor != '#635bff') {
        barColor = '#635bff';
    } else if (num == 4 && lastColor != '#50abf1') {
        barColor = '#50abf1';
    } else {
        barColor = '#ff8200';
    }

    const sort = document.getElementsByClassName("sort");

    for (var i = 0; i < sort.length; i++) {
        sort[i].style.backgroundColor = barColor;

    }

    newArray();
    createGraph();

    complete = true;

}

async function delayAndUpdate() {
    if (complete == false) {
        await delay(delayTime);
        updateGraph();
    }

}

function swap(k, j) {
    if (array[k] > array[j]) {
            var temp = array[k];
            array[k] = array[j];
            array[j] = temp;
    }
}

async function delayedSwap(i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    await delayAndUpdate();
}

var slider = document.getElementById('slider');

function abort() {
   throw new Error("This is not an error. This is just to abort javascript");
}
