let mobileNet;
let puppy;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
    }
}

function modelReady() {
    console.log("Model is ready!!!");
    mobileNet.predict(puppy, gotResults);
}

function imageReady() {
    image(puppy, 0, 0);
}

function preload() {
    mobileNet = ml5.imageClassifier("MobileNet", modelReady);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    puppy = createImg("puppy_gray.jpg", imageReady);
    puppy.hide();

    background(0);
}

function draw() {

}