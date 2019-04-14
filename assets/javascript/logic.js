
    var config = {
            apiKey: "AIzaSyBDaHTMsP589gZdav0-0cFSRrkWkNCzQv4",
            authDomain: "project-1-a07c8.firebaseapp.com",
            databaseURL: "https://project-1-a07c8.firebaseio.com",
            projectId: "project-1-a07c8",
            storageBucket: "project-1-a07c8.appspot.com",
            messagingSenderId: "250875338516"
          };
    firebase.initializeApp(config);

var database = firebase.database();

// Create a variable to reference the database.

var Fname = "";
var Lname = "";
var email = "";
var password = "";
var passwordCon = "";

var  Lemail ="";
var Lpassword="";


// on click function to Capture Button Creat account
$("#doRegister").on("click", function (event) {
    event.preventDefault();


    Fname = $("#registerFirstName").val().trim();
    Lname = $("#registerLastName").val().trim();
    email = $("#registerEmail").val().trim();
    password = $("#registerPassword").val().trim();
    passwordCon = $("#registerConfirmPassword").val().trim();

    database.ref().push({
        Fname: Fname,
        Lname: Lname,
        email: email,
        password: password,
        passwordCon: passwordCon,

    });
    // checkPassword();
    createAccount();
});

database.ref().on("child_added", function(snapshot) {

    console.log(snapshot.val());
   
// Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


//Login Function
  // $("#doLogin").on("click", function (event) {
  //   event.preventDefault();
  //   Lemail = $("#loginEmail").val().trim();
  //   Lpassword = $("#loginpassword").val().trim();
  
    
    // function(error) {
    // console.log("Login Failed!", error);
    //   }

  // });
  // var searchUser = function(userLog) {
  //   var queryURL = "https://project-1-a07c8.firebaseio.com" + userLog + "&apikey=AIzaSyBDaHTMsP589gZdav0-0cFSRrkWkNCzQv4";
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     consol.log(response);
  //   });
  // };

 
   
    //   $("#logout").click(function() {
    //   $("#doLogin").reset();
    //   $("#doRegister").reset();

    // });

// function checkPassword() {
   
//     var letter = /[a-z]/;
//     var letterUp = /[A-Z]/;
//     var number = /[0-9]/;

//     if (password.length < 6 || password != passwordCon || !letter.test(password) || !number.test(password)) {
//         if (password.length < 6) {
//             alert("Please make sure password is longer than 6 characters.")
//             return false;
//         }
//         if (password != passwordCon) {
//             alert("Please make sure passwords match.")
//             return false;
//         }
//         if (!letter.test(password) || !letterUp.test(password)) {
//             alert("Please make sure Password Includes an UpperCase and LowerCase character")
//             return false;
//         }
//         if (!number.test(password)) {
//             alert("Please make sure Password Includes a Digit")
//             return false;
//         }

//         /*email test*/
        
//         var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         if (!filter.test(email)) {
//             alert('Please provide a valid email address');
//             form.email.focus;
//             return false;
//         }
//         return true;
//     }
// }

function createAccount(){
   
    $("doRegister").empty();
   
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