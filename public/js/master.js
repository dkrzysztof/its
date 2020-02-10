const selected_color = "#2196f3";
const unselected_color = "black";
let heightBoxes = [];
let borderColors = ["#ff3030", "#ffc500", "#252525", "#adadad69"];

document.addEventListener("DOMContentLoaded", e => {
    // load heights
    let allboxes = document.querySelectorAll("div.box-container");
    for (let i = 0; i < allboxes.length; i++) {
        heightBoxes[i] = allboxes[i].clientHeight;
        allboxes[i].style.height = 0;
        allboxes[i].style.paddingTop = 0;
        allboxes[i].style.paddingBottom = 0;
        allboxes[i].style.visibility = "hidden";
    }

    // setup listeners
    allboxes = document.querySelectorAll("div.box");
    for (let i = 0; i < allboxes.length; i++) {
        allboxes[i].addEventListener("click", dropContainer);
    }
});

function highligh_text(e) {
    var target = e.target;
    var labels = document.getElementsByTagName("label");

    for (var i = 0; i < labels.length; i++) {
        let label = labels[i];
        if (label.htmlFor === target.id) {
            label.style.color = selected_color;
        }
    }
}
function unhighlight_text(e) {
    var target = e.target;
    var labels = document.getElementsByTagName("label");

    for (var i = 0; i < labels.length; i++) {
        let label = labels[i];

        if (label.htmlFor === target.id) {
            label.style.color = unselected_color;
        }
    }
}

function dropContainer(e) {
    let container = e.target.nextElementSibling;
    let index = 0;
    let child = e.target.parentElement;

    while (child.previousSibling.previousSibling != null) {
        index++;
        child = child.previousSibling;
    }
    index = index / 2;

    if (container.style.visibility == "hidden") {
        container.style.visibility = "visible";

        container.style.height = heightBoxes[index] + "px";
        container.style.padding = "2em 3em";
        container.style.color = "black";
    } else {
        container.style.visibility = "hidden";

        container.style.height = 0;
        container.style.padding = "0 3em";
        container.style.color = "transparent";
    }
}
