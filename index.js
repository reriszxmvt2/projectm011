$(function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();
    db.collection("movies")
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var card = ` <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${doc.data().posterURL}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${doc.data().title}</h5>
          <p class="card-text">${doc.data().detail}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
                $("#list").append(card);
            });
        });