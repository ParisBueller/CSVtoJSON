const csvtojson = require("csvtojson");
const firebase = require('firebase');

const csvFilePath='./DKSalaries (1).csv';
const csv = require('csvtojson');

const config = {
    apiKey: "AIzaSyCWqAq_LcDELeqDkBplI7gTIbHGwTQWeAo",
    authDomain: "value-identifier-app.firebaseapp.com",
    databaseURL: "https://value-identifier-app.firebaseio.com",
    projectId: "value-identifier-app",
    storageBucket: "value-identifier-app.appspot.com",
    messagingSenderId: "382946259505"
  };
firebase.initializeApp(config);
const db = firebase.firestore();

//Convert CSV to JSON
csv()
    .fromFile(csvFilePath)
    .then((jsonArray) => {
        //write to db   
                const promiseArray = jsonArray.map((player)=>{
                    return db.collection('weeks').doc('9').collection('players').doc(player.Name).set( player );
                })
                Promise.all(promiseArray).then((fullArray)=>{
                    console.log("done writting to DB...");
                })
            // jsonObj.forEach(player => {
                // let sal = player.Salary;
                // const dpp = (proj, sal) => sal / proj;
                         
           // dbRef.collection('players').doc(player.Name).set( player )
            // .then(() => {
            //     console.log("done writting to DB...");
            // })
        // })
    
});


    


//get from db
// db.collection('weeks').doc('9').collection('players').get().then(col => {
//     console.log("document data", col.docs.map(doc => doc.data()));
// })


