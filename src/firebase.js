import firebase  from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyACg7fHTz3q4cVYH5TYYJTjelcezFDgZ9g",
    authDomain: "sa-nba.firebaseapp.com",
    databaseURL: "https://sa-nba-default-rtdb.firebaseio.com",
    projectId: "sa-nba",
    storageBucket: "sa-nba.appspot.com",
    messagingSenderId: "29411150500",
    appId: "1:29411150500:web:d0187991896c49b520f431"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref("articles");
  const firebaseTeams = firebaseDB.ref("teams");
  const firebaseVideos = firebaseDB.ref("videos");


  const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
  }



  export {
      firebase,
      firebaseDB,
      firebaseTeams,
      firebaseVideos,
      firebaseArticles,
      firebaseLooper
  }