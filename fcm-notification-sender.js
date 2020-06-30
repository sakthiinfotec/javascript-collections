var FCMAdmin = require("firebase-admin");
var FCMServiceAccount = require("./service-account.json");
var topic = req.body.target;

var payloadWithTopic = {
    'notification': {
        'title': req.body.title,
        'body': req.body.message
    },
    topic: topic
};

FCMAdmin.messaging()
    .send(payloadWithTopic)
    .then(function (response) {
        console.log("Topic message sent successfully");
    }).catch(function (err) {
        console.log(err);
    });
