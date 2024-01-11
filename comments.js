// Create web server
// Load modules
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
// Load comments
var comments = require('../data/comments.json');
// Load users
var users = require('../data/users.json');
// Load products
var products = require('../data/products.json');

// GET /comments
router.get('/', function(req, res, next) {
  res.send(comments);
});

// POST /comments
router.post('/', function(req, res, next) {
  // Add comment to comments
  comments.push(req.body);
  // Save comments
  fs.writeFile(path.join(__dirname, '../data/comments.json'), JSON.stringify(comments), function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      // Find product
      var product = products.find(function(product) {
        return product.id === req.body.product_id;
      });
      // Find user
      var user = users.find(function(user) {
        return user.id === req.body.user_id;
      });
      // Send email
      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: '