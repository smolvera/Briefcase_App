"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/connection.js")[env];
var db = {job: require("./job"), registration: require("./registration")};

var express = require('express')
var app = express()
 


// stopped here (star wars activity.. need to get a job by id to display on html page and add to database)

// if user 







module.exports = db;
