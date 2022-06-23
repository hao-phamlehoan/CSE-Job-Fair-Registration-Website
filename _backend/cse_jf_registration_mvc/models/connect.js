var mysql = require('mysql');
var db_config = {
    host: 'us-cdbr-east-05.cleardb.net', // Replace with your host name
    user: 'bb18676c2e2bf4', // Replace with your database username
    password: 'e74bada7', // Replace with your database password
    database: 'heroku_5d53c53b1a38be0' // // Replace with your database Name
};
var db;

function handleDisconnect() {
    db = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  db.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('Kết nối CSDL không thành công:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
    console.log('Kết nối CSDL thành công')
    db.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}
handleDisconnect();

// db.connect(function(err) {
//     if (err) {
//         console.log("Kết nối CSDL không thành công")
//     } else console.log("Kết nối CSDL thành công")
// });
// setInterval(function () {
//     db.query('SELECT 1');
// }, 5000);
module.exports = db;