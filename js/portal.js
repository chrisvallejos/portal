
// let mqs = window.matchMedia('(max-width: 991px)');
// document.querySelector(".mq-value").innerText = mqs.matches;

// Defining event listener function
function displayWindowSize() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    // Display result inside a div element
    document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();



var para = document.querySelector('p.sam');

var mql = window.matchMedia('(max-width: 991px)');

function screenTest(e) {
    if (e.matches) {
        /* the viewport is 991 pixels wide or less */
        para.textContent = 'Open modals are allowed here, since the view port is 991 pixels wide or less';
        document.getElementById("modal-status").style.backgroundColor = "#8fff82";
    } else {
        /* the viewport is more than 600 pixels wide */
        para.textContent = 'Any open modals should be closed since the screen is bigger than 991 px';
        document.getElementById("modal-status").style.backgroundColor = "#ff8c8c", $('#modalMenu').modal('hide');
    }
}

screenTest(mql);
mql.addEventListener('change', screenTest, false);

mql.onchange = function () {
    console.log(mql);
}