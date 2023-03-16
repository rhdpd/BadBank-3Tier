var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require ('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

//create user account
app.get('/account/create/:name/:email/:password', function (req, res){
    // else create new user
    dal.create(req.params.name,req.params.email,req.params.password).
        then ((user) => {
            console.log(user);
            res.send(user);
    });
});

//balance
app.get('/account/amount/:email', function (req, res){
    dal.amount(req.params.email).
        then ((user) => {
            console.log(user);
            res.send(user);
    });
});

// login.js
app.get('/account/login/:email/:password', function (req, res){
    dal.login(req.params.email, req.params.password)
        .then((user) => {
            console.log("Root Index: " + user + " is logged in");
            
            // Shows success after successful login
            res.send({message:"Success",user:user});
        }).catch((err) => {
            console.log("Root Index:" + err.message);
            res.send({message:err.message, user:{name:"Null"}});
        });
});

// withdraw.js
app.get('/account/withdraw/:email/:balance', function (req, res){
    dal.withdraw(req.params.email, req.params.balance)
        .then((user) => {
            console.log("Root Index: " + user);
            console.table(user);
            res.send({message:"Success",isSuccess:true,user:user});
        }).catch((err) => {
            console.log("Root Index: " + err.message);
            res.send({message:err.message,isSuccess:false});
        });
});


//all accounts
app.get('/account/all', function (req, res) {
    dal.all (). 
        then ((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

//deposit.js
app.get('/account/deposit/:email/:balance', function (req, res){
    dal.deposit(req.params.email, req.params.balance)
         .then ((user) => {
            console.log(user);
            res.send({message:"Success", isSuccess:true, user:user});
        }).catch((err) => {
            console.log("Root Index:" + err.message);
            res.send({message:err.message, isSuccess:false});
        });
    });

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);