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
var auth = firebase.auth();
var currentUser = auth.currentUser;
console.log(currentUser)

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
   
    // database.ref().push({
    //     Fname: Fname,
    //     Lname: Lname,
    //     email: email,
    //     password: password,
    //     passwordCon: passwordCon,
    
    // });
    // checkPassword();
    auth.createUserWithEmailAndPassword(email, password).then(function(user){
      createAccount();
      console.log(user)
    })
  
});

database.ref().on("child_added", function(snapshot) {

    // console.log(snapshot.val());
   
// Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


// Login Function
  $("#doLogin").on("click", function (event) {
    event.preventDefault();
    Lemail = $("#loginEmail").val().trim();
    Lpassword = $("#loginPassword").val().trim();
    console.log(Lemail)
    console.log(Lpassword)
  auth.signInWithEmailAndPassword(Lemail, Lpassword).then(function(user){
    createAccount();
    console.log(user)
  }).catch(function(error){
    console.log("Login Failed!", error.message);
  })
  });
  
      $("#logout").click(function() {
        auth.signOut().then(function(user){
          console.log("signout")
        })
    });
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

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
   
    $("#buttons").empty();
    $("#registerModal").modal('hide')
    $("#loginModal").modal('hide')
    
    //Create a variable called "user Acc" and set the user name to a new div.
    var userAcc = $("<div>");
        userAcc.addClass("welcomeUser")
        userAcc.text($(this).attr("Fname"));
        $("#welcomeUser").append(userAcc);
    
    
    
}






// const categories = [];
// console.log(categories)

//   function renderCategory() {
//     $(".category-area").empty();
//     for (var i = 0; i < categories.length; i++)  {

//     const newCard = $("<div>");
//     newCard.addClass("card");
//     newCard.width('18rem')
//     newCard.attr("data-category", categories[i]);
//     newCard.text(categories[i]);

//     const newButton = $("<button>");
//     newButton.addClass("category-button");
//     newButton.attr("data-button", categories[i]);
//     newButton.text(categories[i]);

//         const newImage = $("<img>");
//         newImage.attr('src', 'https://www.encodedna.com/images/theme/html5.png');
        
//         const cardBody = $("<div>");
//         cardBody.addClass("card-body");

//         // $(".card-body").append(newButton)



//       $(".category-area").append(newCard).append(newButton);
//     }
//   }
// renderCategory();
// console.log(renderCategory)

// $("#create-new").on("click", function(event) {
// event.preventDefault();
// categories.push($("#input-category").val());
// $("#categories-display").empty();
// renderCategory();
// $("#exampleModalCenter").modal('hide')
// console.log(categories);

// $("#input-category").val("")
// });


