
let mqs = window.matchMedia('(max-width: 991px)');
document.querySelector(".mq-value").innerText = mqs.matches;

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


// collapse modal window one
/* var para = document.querySelector('p.sam');

var mql = window.matchMedia('(max-width: 991px)');
var mqla = window.matchMedia('(max-width: 767px)');
var mqlb = window.matchMedia('(max-width: 478px)'); */



/* function screenTest(e) {
    if (e.matches) {
    // the viewport is 991 pixels wide or less
        para.textContent = 'Open modals are allowed here, since the view port is 991 pixels wide or less';
        document.getElementById("modal-status").style.backgroundColor = "#8fff82";
    } else {
        the viewport is more than 991 pixels wide
        para.textContent = 'Any open modals should be closed since the screen is bigger than 991 px';
        document.getElementById("modal-status").style.backgroundColor = "#ff8c8c", $('#modalMenu').modal('hide');
    } */

/* screenTest(mql);
mql.addEventListener('change', screenTest, false);

mql.onchange = function () {
    console.log(mql);
} */

// collapse modal window two

// var para = document.querySelector('p.sam');

//var mql = window.matchMedia('(max-width: 991px)');
//var mqla = window.matchMedia('(max-width: 767px)');
//var mqlb = window.matchMedia('(max-width: 478px)');



//function screenTest(e) {
//  if (e.matches) {
//    /* the viewport triggers a media query */
//   para.textContent = 'Any open modals should be closed since the screen hit a break point';
// document.getElementById("modal-status").style.backgroundColor = "#ff8c8c", $('#modalMenu').modal('hide');
//} 
//if (e.matches) {
//    /* the viewport triggers a media query */
//    para.textContent = 'Any open modals should be closed since the screen hit a break point';
//  document.getElementById("modal-status").style.backgroundColor = "#8cffa7", $('#modalMenu').modal('hide');
//} 
//if (e.matches) {
/* the viewport triggers a media query */
//    para.textContent = 'Any open modals should be closed since the screen hit a break point';
//    document.getElementById("modal-status").style.backgroundColor = "#968cff", $('#modalMenu').modal('hide');
//// } 
//}

// screenTest(mql);
// mql.addEventListener('change', screenTest, false);

//screenTest(mqla);
//mqla.addEventListener('change', screenTest, false);

//screenTest(mql);
//mqlb.addEventListener('change', screenTest, false);

//mql.onchange = function () {
//    console.log(mql);
//}

//mqla.onchange = function () {
//   console.log(mqla);
//}

//mqlb.onchange = function () {
//    console.log(mqlb);
//}


const large = window.matchMedia('(min-width: 992px');
large.addEventListener(console.log);

large.addEventListener(alertMel);
function alertMel(e) {
    if (e.matches) {
        document.body.style.backgroundColor = 'green', $('#modalMenu').modal('hide');
    }
}

const med = window.matchMedia('(min-width: 479px) and (max-width: 767px)');
med.addEventListener(console.log);

med.addEventListener(alertMem);
function alertMem(f) {
    if (f.matches) {
        document.body.style.backgroundColor = '#800071', $('#modalMenu').modal('hide');
    }
}

const sm = window.matchMedia('(min-width: 478px)');
sm.addEventListener(console.log);

sm.addEventListener(alertMes);
function alertMes(g) {
    if (g.matches) {
        document.body.style.backgroundColor = '#ead600', $('#modalMenu').modal('hide');
    }
}
