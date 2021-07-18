  var firebaseConfig = {
    apiKey: "AIzaSyDis9OJ20-9TUdLTcj1wU3PwOhwkSrLhJQ",
    authDomain: "contactus-13abe.firebaseapp.com",
    databaseURL: "https://contactus-13abe.firebaseio.com",
    projectId: "contactus-13abe",
    storageBucket: "contactus-13abe.appspot.com",
    messagingSenderId: "394952527579",
    appId: "1:394952527579:web:808d23112700d6deeb86fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages to table
var messagesRef = firebase.database().ref('messages');


//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
   console.log(123);
    

//Get Values
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;

saveMessage(name, email, message);

//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert after sometime
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
}, 3000)
document.getElementById('contactForm').reset();

}


// Save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
}