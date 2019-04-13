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

// Create a variable to reference the database.

var Fname = "";
var Lname = "";
var email = "";
var password = "";
var passwordCon = "";
var address = "";
var address2 = "";
var city = "";
var state = "";
var zip = "";

// on click function to Capture Button Creat account
$("#submit").on("click", function (event) {
    event.preventDefault();

    //  Constructing a queryURL using the address name
    //  var queryURL = "https://www.google.com/maps/dir/?" +
    //  address + "&api_key=AIzaSyD057zsoWxVfH2YsDMgJkwq62OJYd1s-hI";

    //  $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //   .then(function(response) {
    //     console.log(queryURL);
    //     address = response.data;

    // });

    Fname = $("#inputFName").val().trim();
    Lname = $("#inputLName").val().trim();
    email = $("#inputEmail").val().trim();
    password = $("#inputPassword").val().trim();
    passwordCon = $("#confirmPassword").val().trim();
    address = $("#inputAddress").val().trim();
    address2 = $("#inputAddress2").val().trim();
    city = $("#inputCity").val().trim();
    state = $("#inputState").val().trim();
    zip = $("#inputZip").val().trim();
    

    database.ref().push({
        Fname: Fname,
        Lname: Lname,
        email: email,
        password: password,
        passwordCon: passwordCon,
        address: address,
        address2: address2,
        city: city,
        state: state,
        zip: zip
       
    });
    checkPassword();
    createAccount();
});

database.ref().on("child_added", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
   
    console.log(snapshot.val().Fname);
    console.log(snapshot.val().Lname);
    console.log(snapshot.val().email);
    console.log(snapshot.val().password);
    console.log(snapshot.val().passwordCon);
    console.log(snapshot.val().address);
    console.log(snapshot.val().address2);
    console.log(snapshot.val().city);
    console.log(snapshot.val().state);
    console.log(snapshot.val().zip);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
function checkPassword() {
   
    var letter = /[a-z]/;
    var letterUp = /[A-Z]/;
    var number = /[0-9]/;

    if (password.length < 6 || password != passwordCon || !letter.test(password) || !number.test(password)) {
        if (password.length < 6) {
            alert("Please make sure password is longer than 6 characters.")
            return false;
        }
        if (password != passwordCon) {
            alert("Please make sure passwords match.")
            return false;
        }
        if (!letter.test(password) || !letterUp.test(password)) {
            alert("Please make sure Password Includes an UpperCase and LowerCase character")
            return false;
        }
        if (!number.test(password)) {
            alert("Please make sure Password Includes a Digit")
            return false;
        }

        /*email test*/
        
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            alert('Please provide a valid email address');
            form.email.focus;
            return false;
        }
        return true;
    }
}

function createAccount(){
   
    $("#form-container").empty();
   
    //Create a variable called "user Acc" and set the user name to a new div.
    var userAcc = $("<div>");
        userAcc.addClass("welcomeUser");
        userAcc.text($(this).attr("Fname"));
        $("#welcomeUser").append(userAcc);
    
    
    
}


// // When a user clicks a button 
// $("#form").submit(function (event) {
//     //Prevent your default behavior
//     event.preventDefault();

// $(".name").on("click", function () {
//     //Prevent your default behavior
//     event.preventDefault();

// $(".size").on("click", function () {
//     //Prevent your default behavior
//     event.preventDefault();

// $(".weight").on("click", function () {
//     //Prevent your default behavior
//     event.preventDefault();  

// $(".image").on("click", function () {
//     //Prevent your default behavior
//     event.preventDefault();

// $(".color").on("click", function () {
//     //Prevent your default behavior
//     event.preventDefault();