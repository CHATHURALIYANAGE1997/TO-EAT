const express = require('express');
const connection = require('../connection');
const router = express.Router();
const bcrypt = require("bcrypt");


const jwt = require('jsonwebtoken');
const nodemailer=require('nodemailer');
require('dotenv').config();


router.post('/signup', (req, res) => {
    let user = req.body;
    query = 'select email,password,role,accountstatus from user where email=?'
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                let string = require('crypto').randomBytes(64).toString('hex');
                user.password = setPassword(user.password);
                query = "insert into user(name,email,password,contactnumber,verificationcode,accountstatus,role) values(?,?,?,?,'false','user')";
                connection.query(query, [user.name, user.email, user.password, user.contactnumber, string], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "Successfully signup" });
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({ message: 'Email is alredy exite' });
            }
        } else {
            return res.status(500).json(err);
        }
    })
})

router.post('/login', (req, res) => {
    let user = req.body;
    password = user.password;
    query = "select email,password,role,status from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length > 0 && bcrypt.compare(password, results[0].password && results[0].accountstatus == 'true')) {
                const resp = { email: results[0].email, role: results[0].role }
                const accesstoken = jwt.sign(resp, process.env.TOKEN, { expiresIn: '4h' })
                return res.status(200).json({ token: accesstoken,role:role });
            } else {
                return res.status(400).json({ message: "Wrong email and password" });
            }
        } else {
            return res.status(400).json({ message: "Something went wrong" });
        }
    })
})

router.post('/forgotpassword',(req,res)=>{
    const user=req.body;
    
})

UserSchema.methods.setPassword = function (password) {

    this.salt = crypto.randomBytes(16).toString('hex');


    this.hash = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, `sha512`).toString(`hex`);
};


var trans=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        password:process.env.PASSWORD
    }
})

module.exports = router;
