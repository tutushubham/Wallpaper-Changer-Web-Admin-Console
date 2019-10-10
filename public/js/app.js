var firebaseConfig = {
    apiKey: "AIzaSyAH35TgV5zk9o1-Yu6nZH3H2D_x0hrpGng",
    authDomain: "wallpaperapp-e686e.firebaseapp.com",
    databaseURL: "https://wallpaperapp-e686e.firebaseio.com",
    projectId: "wallpaperapp-e686e",
    storageBucket: "wallpaperapp-e686e.appspot.com",
    messagingSenderId: "1026808787258",
    appId: "1:1026808787258:web:c11715a9bba4edec10e003",
    measurementId: "G-JEF5C96KCQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function () {

    var email = $("#email").val();
    var password = $("#password").val();

    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
    });

});

$("#btn-logout").click(function () {
    firebase.auth().signOut();
});

function switchView(view) {
    $.get({
        url: view,
        cache: false,
    }).then(function (data) {
        $("#container").html(data);
    });
}