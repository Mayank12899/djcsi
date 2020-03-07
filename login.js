var provider = new firebase.auth.GoogleAuthProvider();
var login = document.getElementById("login");
login.addEventListener('click',signin);

function signin() {
    console.log("hello")
    firebase.auth().signInWithPopup(provider).then(function(result){
        console.log("hgfh");
        var token = result.credential.accessToken;
        var user = result.user;
        
        console.log(token)
        console.log(user)
        window.location.href = "home.html";
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
          
        console.log(error.code)
        console.log(error.message)
     });
}
var logout = document.getElementById('logout');
    logout.addEventListener('click',logo)
    function logo() {
        
        firebase.auth().signOut();
        console.log("login.html");
      
    }
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
     
         window.location.href = 'home.html';
        console.log("good")
    
      
    }
    else{
      console.log("bad")
    }
    });
    
    
    