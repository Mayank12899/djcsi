var provider = new firebase.auth.GoogleAuthProvider();
var login = document.getElementById("login");
login.addEventListener('click',signin);

function signin() {
    console.log("hello")
    var userEmail = document.getElementById("nname").value;
    var userPass = document.getElementById("fnumb").value;
  
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error : " + errorMessage);
  
      // ...
    })
}
var logout = document.getElementById('logout');
    logout.addEventListener('click',logo)
    function logo() {
        
        firebase.auth().signOut();
        console.log("login.html");
      
    }
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
     
        document.getElementById("login_div").style.display = "none";
        console.log("good")
    
      
    }
    else{
      console.log("bad")
     
    }
    });
    
    
    