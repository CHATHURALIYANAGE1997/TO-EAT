const express = require('express');
const connection = require('../connection');
const router = express.Router();
const bcrypt = require("bcrypt");


const jwt = require('jsonwebtoken');
const nodemailer=require('nodemailer');
require('dotenv').config();



module.exports = router;
