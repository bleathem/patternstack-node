const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: "Firstname1 Lastname1", username: "username1"},
    { id: 1, name: "Firstname2 Lastname2", username: "username2"},
    { id: 1, name: "Firstname3 Lastname3", username: "username3"},
    { id: 1, name: "Firstname4 Lastname4", username: "username4"},
]


router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
