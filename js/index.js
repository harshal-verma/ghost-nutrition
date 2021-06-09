// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCyLWFA1-ZeqOjikCFxXAWKo7pqGCPyq3A",
    authDomain: "e-commerce-web-app-319f7.firebaseapp.com",
    projectId: "e-commerce-web-app-319f7",
    storageBucket: "e-commerce-web-app-319f7.appspot.com",
    messagingSenderId: "60117870520",
    appId: "1:60117870520:web:dd803253a332b24e23d14d",
    measurementId: "G-5QFM41WC98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.persistence.LOCAL;

  $("login__page").click(function(){
      let email = $("email__field").val();
      let password = $("password__field").val();

      if(email != "" && password != ""){
          let result = firebase.auth().signInWithEmailAndPassword(email, password);

          result.catch(function(error){
            let errorCode = error.code;
            let errorMessage = error.message;

            console.log(errorCode);

            console.log(errorMessage);

            window.alert("Message: " + errorMessage);
          });
      }else{
          window.alert("Please fill out all fields.");
      }
  })