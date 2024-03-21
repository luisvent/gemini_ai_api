const config = require('config');
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const configApp = (app) => {
  if (!config.get('gemini_private_key')) {
    throw new Error('FATAL ERROR: gemini_private_key is not defined.');
  }

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
}

module.exports = {
  init: configApp
};
