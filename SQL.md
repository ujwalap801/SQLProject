## MySQL2 Package

TO connect Node with MyQL

connection.end();  //to close connection


## Connection


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: ' ',
    password: ''
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }

    console.log('Connected to the database');



# Routing
GET / =>Show no of users in DB
GET /user =>show users(email, id,username)
PATCH /user/:id  =>username edit
POST /user =>new user
DELETE /user/:id =>user delete