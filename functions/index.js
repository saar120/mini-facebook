const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data) =>
  admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) =>
      admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      })
    )
    .then(() => ({
      message: `${data.email} is now admin.`,
    }))
    .catch((err) => {
      console.error(err);
      return err;
    })
);
