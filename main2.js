var firebaseConfig = {
  apiKey: "AIzaSyCmtK4c2NQtqgVou_u6IbdTkqZDStw6Fbo",
  authDomain: "conus2-9ba8f.firebaseapp.com",
  databaseURL: "https://conus2-9ba8f.firebaseio.com",
  projectId: "conus2-9ba8f",
  storageBucket: "conus2-9ba8f.appspot.com",
  messagingSenderId: "72313294097",
  appId: "1:72313294097:web:fdcd42c427343c7aa490b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}