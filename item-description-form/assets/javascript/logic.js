// Variables for the item
var name
var size
var color
var weight
var image
var submit

$("name").on("change", function () {
    name = $('#name').val();
    console.log("name");
});

$("size").on("change", function () {
    size = $('#size').val();
    console.log("size");
});

$("color").on("change", function () {
    color = $('#color').val();
    console.log("color");
});

$("weight").on("change", function () {
    weight = $('#weight').val();
    console.log("weight");
});

$("image").on("change", function () {
    image = $('#image').val();
    console.log("image");
});

$("#submit-btn").on("click", function () {
    console.log("clicking on a submit button")
});

