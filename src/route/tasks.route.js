const express = require('express');

const router = express.Router();

const tasksControl = require('../controller/tasks.controller');

router.post('/', tasksControl.create);
router.get('/', tasksControl.find);
router.put('/:id', tasksControl.update);
router.delete('/:id', tasksControl.remove);

module.exports = router;