const express = require('express');
const router = express.Router();
const contestantController = require('../controllers/contestant.controller');

/* GET characters listing. */
router.get('/', contestantController.getAllContestants);

// POST new character
router.post('/', contestantController.newContestant);

// PUT edit character
router.put('/:id', contestantController.editContestant);

// DELETE character
router.delete('/:id', contestantController.deleteContestant);

module.exports = router;
