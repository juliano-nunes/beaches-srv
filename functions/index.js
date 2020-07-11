const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

exports.beaches = functions.https.onRequest((request, response) => {
  let db = admin.database();
  let ref = db.ref("beaches");

  ref.on("value", function(snapshot) {
    response.send(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    response.send("ERRO");
  });
});
