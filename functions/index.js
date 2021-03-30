const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "unauthenticated",
            "Only authenticated users can add requests"
        );
    }
    console.log(data);
    const user = await admin.auth().getUserByEmail(data.email);
    const result = await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    
    if (!result) return { message: `Error! ${data.email} hadn't been promoted as admin.` };

    return result;
});
exports.getAdminInfo = functions.https.onCall((data, context) => {
    admin
        .auth()
        .getUser(data.uid)
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log(userRecord.customClaims['admin']);
            return userRecord;
        })
        .catch((error) => {
            console.log('Error fetching user data:', error);
        });
});