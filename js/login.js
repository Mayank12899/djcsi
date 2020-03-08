var provider = new firebase.auth.GoogleAuthProvider();
var login = document.getElementById("login");
var logout = document.getElementById("logout");
var openj = document.getElementById("ojoke");
var mmusic = document.getElementById("mmusic");
var fquiz = document.getElementById('fquizb');
var fm = document.getElementById('fm');
var ins = document.getElementById('ins');
var chatbot = document.getElementById('chatbot');
chatbot.addEventListener('click',chatui);
function chatui() {
    document.getElementById("mychart").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("joke").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("bot").style.display = "block";

}
ins.addEventListener('click',chartIt)
var values=[];
var labels=[];
var db=firebase.firestore();
db.collection('user1').doc('result').get().then(doc => {
    //  console.log(doc.data()['emotion'])
    angry_data=(doc.data()['emotion'])['angry']
    // console.log(angry_data)
    bored_data=(doc.data()['emotion'])['bored']
    excited_data=(doc.data()['emotion'])['excited']
    fear_data=(doc.data()['emotion'])['fear']
    happy_data=(doc.data()['emotion'])['happy']
    sad_data=(doc.data()['emotion'])['sad']
    negative_data=(doc.data()['sentiment'])['negative']
    positive_data=(doc.data()['sentiment'])['positive']
    neutral_data=(doc.data()['sentiment'])['neutral']
    values.push(angry_data,bored_data,excited_data,fear_data,happy_data,sad_data,negative_data,positive_data,neutral_data)
    labels.push("Angry","Bored","Excited","Fear","Happy","Sad","Negative","Positive","Neutral")
    // array=array[angry_data,bored_data,excited_data,fear_data,happy_data,sad_data]
    // putinArray(angry_data,bored_data,excited_data,fear_data,happy_data,sad_data)
    // console.log(angry_data,bored_data,excited_data,fear_data,happy_data,sad_data)
    console.log(values)
    console.log(labels)
    console.log("Hi")
});
async function chartIt() {
    document.getElementById("mychart").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("joke").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("bot").style.display = "none";

    var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: values,
                backgroundColor: [
                    'rgba(255, 200, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        });
}

// async function getData() {
    
            
//             })
// }

fm.addEventListener('click',facts);
function facts() {
    document.getElementById("home").style.display = "none";
    document.getElementById("joke").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "block";
    document.getElementById("mychart").style.display = "none";
    document.getElementById("bot").style.display = "none";
}
fquiz.addEventListener('click',quiz);
function quiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("joke").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "block";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("mychart").style.display = "none";
    document.getElementById("bot").style.display = "none";
}
mmusic.addEventListener('click',omusic);
function home1(){
    document.getElementById("home").style.display = "block";
    document.getElementById("joke").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("mychart").style.display = "none";
    document.getElementById("bot").style.display = "none";
}


function omusic(){
    document.getElementById("home").style.display = "none";
    document.getElementById("joke").style.display = "none";
    document.getElementById("music").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("mychart").style.display = "none";
    document.getElementById("bot").style.display = "none";
}

openj.addEventListener('click',openjoke);
function openjoke() {
    document.getElementById("home").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("joke").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("mychart").style.display = "none";
    document.getElementById("bot").style.display = "none";
}

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

    
    function logo() {
        
        firebase.auth().signOut();
        document.getElementById("login_div").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("music").style.display = "none";
        document.getElementById("joke").style.display = "none";
        document.getElementById("login_div").style.display = "none";
        document.getElementById("fquiz").style.display = "none";
        document.getElementById("mythnfact").style.display = "none";
        document.getElementById("mychart").style.display = "none";
        document.getElementById("bot").style.display = "none";
      
    }
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
     
        document.getElementById("login_div").style.display = "none";
        document.getElementById("home").style.display = "block";
        document.getElementById("music").style.display = "none";
    document.getElementById("joke").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("fquiz").style.display = "none";
    document.getElementById("mythnfact").style.display = "none";
    document.getElementById("mychart").style.display = "none";
    document.getElementById("bot").style.display = "none";
        console.log("good")
    
      
    }
    else{
      console.log("bad")
     
    }
    });
    
    
    