// (function() {
//
//   // I am doing async work
//   function sendMessage(message) {
//     return new Promise(function(resolve, reject) { //for Angular, use "return new $q..."
//       setTimeout(function() {
//         console.log(message);
//
//         resolve("OK, I'm done with " + message);
//       }, 3000);
//     });
//   }
//
//   connectToServer()
//     .then(loginUser)
//     .then(downloadProfile)
//     .then(makeAMessage)
//
//
//   function connectToServer() {
//     return sendMessage("Connect to server");
//   }
//
//   function loginUser() {
//     return sendMessage("Logging in user");
//   }
//
//   function downloadProfile() {
//     return sendMessage("Downloading user profile");
//   }
//
//   function makeAMessage(results) {
//     return sendMessage(results);
//   }
// }());
