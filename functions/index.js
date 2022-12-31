const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51MKygaSJsvX4oW7TVNDXo4Qkcfhygqg" +
    "CmcOmXkKGQk6YU5pcrUDDuHcaKMHa2Nnx3QINT5A" +
    "MJKACz8ZYAyLMewzG00WG2DC0Fu"
);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
