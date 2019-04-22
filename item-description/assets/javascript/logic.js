$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBDaHTMsP589gZdav0-0cFSRrkWkNCzQv4",
        authDomain: "project-1-a07c8.firebaseapp.com",
        databaseURL: "https://project-1-a07c8.firebaseio.com",
        projectId: "project-1-a07c8",
        storageBucket: "project-1-a07c8.appspot.com",
        messagingSenderId: "250875338516"
    };
    firebase.initializeApp(config);

    // Variable for database reference
    var database = firebase.database();

    // Variables for the item
    var name;
    var size;
    var color;
    var weight;
    var image;

    // Adds information about the item when the user presses the button
    $("#submit-btn").on("click", function () {
        event.preventDefault();

        // Store and retrieve new item data
        name = $("#item-name").val().trim();
        size = $("#size").val().trim();
        color = $("#color").val().trim();
        weight = $("#weight").val().trim();
        image = $("#image").val().trim();

        // Pushing item variables to database
        database.ref('items').push({
            name: name,
            size: size,
            color: color,
            weight: weight,
            image: image,
        });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref('items').on("child_added", function (snapshot) {
        // Console.log the "snapshot" value (a point-in-time representation of the database)
        // console.log(snapshot);

        console.log(snapshot.val());

        // // Log everything that's coming out of the snapshot
        // console.log(snapshot.val().name);
        // console.log(snapshot.val().size);
        // console.log(snapshot.val().color);
        // console.log(snapshot.val().weight);
        // console.log(snapshot.val().image);

        // Change the HTML to reflect
        $("#name").text(snapshot.val().name);
        $("#size").text(snapshot.val().size);
        $("#color").text(snapshot.val().color);
        $("#weight").text(snapshot.val().weight);
        $("#image").text(snapshot.val().image);

        // Table Display
        $("#table-display").append(
            "<tr><td>" + snapshot.val().name +
            "</td><td>" + snapshot.val().size +
            "</td><td>" + snapshot.val().color +
            "</td><td>" + snapshot.val().weight +
            "</td><td>" + snapshot.val().image +
            "</td><tr>");

    });

});