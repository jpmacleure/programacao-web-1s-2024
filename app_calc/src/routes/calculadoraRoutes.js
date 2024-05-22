const express = require('express');
const router  = express.Router();
const calcController = require('../controller/calculadoraController');

router.get('/', calcController.index);
router.post('/resultado', calcController.resultado);

module.exports = router;