var express = require('express');
var router = express.Router();
let  controladores= require("../controladores/controladores");

router.get("/", controladores.index);

module.exports = router;
