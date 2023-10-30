const express = require('express');
const path = require('path');
// const res = require('express/lib/response');

const app = express();
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//  ===== web services =====
//login,post
app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // const {username,password} = req.body;
    console.log(username, password);
    res.end();


})



// login, get
app.get("/login/:username/:password", function (req, res) {
    // http://localhost:3000/login/admin/1234
    // const username = req.params.username;
    // const password = req.params.password;
    const { username, password } = req.params;
    // console.log(username, password);
    // res.end();
    if (username == 'admin' && password == '1234') {
        res.send('Login success');
    } else {
        res.status(401).send('Login fail');
    }

});

// get current datetime
// app.get('/now', function (_req, res) {
//     res.send(new Date().toLocaleString());
// });


// root
app.get('/', function (_req, res) {
    // res.status(200).send('Hello me');
    // res.status(200).sendFile(__dirname + '/views/index1.html');
    res.status(200).sendFile(path.join(__dirname, 'views/index1.html'));

});

// start server 
const PORT = 3000;
app.listen(PORT, function () {
    console.log('Server is running at port ' + PORT);
});