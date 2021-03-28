const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall(({ email }, context) => {
    admin.auth().getUserByEmail(email).then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, { admin: true });
    }).then(() => {
        return { message: `Success! ${email} had been promoted as admin.`}        
    }).catch((err) => err);
});