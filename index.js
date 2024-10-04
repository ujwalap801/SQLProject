
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'deleta_app',
    password: 'Ujwala@2728'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }

    console.log('Connected to the database');
    
    // INSERTING NEW ONE DATA

    // let q ="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
    // let users = ["123","123_user","abc@gmail.com","abc"]
                

    let q ="INSERT INTO user(id,username,email,password) VALUES ?";
    let users =[
                ["123rrrd","123_userbbbbb","abcdeeee@gmail.com","abcd"],
                ["123cee","123_userbeec","abcdeee@gmail.com","abcde"]]

    // Query to show tables
    // connection.query(q, (err, result) => {
    //     if (err) {
    //         console.error('Error executing query:', err);
    //     } else {
    //         console.log('Tables in the database:', result);
    //         console.log(result.length);
    //         console.log(result[0]);
    //         console.log(result[1]);
    //     }

    //     // Close the connection after the query
    //     connection.end();
    // });


    //   CONNECTING  NEW ONE DATA TO DATABASE
    // connection.query(q,user, (err, result) => {
    //     if (err) {
    //         console.error('Error executing query:', err);
    //     } else {
    //         console.log('Tables in the database:', result);
    //         console.log(result);
    //     }

    //     // Close the connection after the query
    //     connection.end();
    // });


    //CONNECTING USERS ARRAY TO DATABASE
    connection.query(q,[users], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
        } else {
            console.log('Tables in the database:', result);
            console.log(result);
        }

        // Close the connection after the query
        connection.end();
    });
    
});



