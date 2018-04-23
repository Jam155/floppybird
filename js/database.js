

let config = {
    
  apikey: "AIzaSyA7VRyFHSWxa730sFpCjW_WJPeVZ_vxeWU",
  authDomain: "kino-flappy-bird.firebaseapp.com",
  databaseURL: "https://kino-flappy-bird.firebaseio.com",
    
};

firebase.initializeApp(config);

let database = firebase.database();

let addUserScore = function(name, email, score) {

    let scoreRef = database.ref('scores/').push();
    scoreRef.set({

        name: name,
        email: email,
        score: score,

    });

};