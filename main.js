function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png')
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function filter_tint2() {
    tint_color = document.getElementById("color_name2").value;
}

function filter_tint3() {
    tint_color = document.getElementById("color_name3").value;
}

function filter_tint4() {
    tint_color = document.getElementById("color_name4").value;
}

function filter_tint5() {
    tint_color = document.getElementById("color_name5").value;
}

function remove_filter() {
    tint_color = "";
}
