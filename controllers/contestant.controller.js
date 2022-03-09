const Contestant = require('../models/contestant');

module.exports.getAllContestants = (req, res, next) => {
    Contestant.find({})
    .then(contestants => res.json(contestants))
    .catch(err => res.status(400).json(err));
};

module.exports.newContestant = (req, res, next) => {
    const contestant = req.body.contestant;
    console.log('contestant', contestant);
    const newContestant = new Contestant({
        name: contestant.name,
        last_name: contestant.last_name,
        birth_date: contestant.birth_date,
        phone: contestant.phone,
        country: contestant.country,
        email: contestant.email,
        character: contestant.character,
    });

    newContestant.save()
    .then(contestant => res.status(201).json(contestant))
    .catch(err => res.status(400).json(err));
};

module.exports.editContestant = (req, res, next) => {
    console.log('id', req.params.id);
    const id = req.params.id;
    console.info('req.body', req.body);
    const editedContestant = req.body.contestant;

    Contestant.findByIdAndUpdate(id, editedContestant, { runValidators: true, new: true })
        .then(contestant => res.status(202).json(contestant))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteContestant = (req, res, next) => {
    console.log('id', req.params.id);
    Contestant.findByIdAndDelete(req.params.id)
    .then(contestant => {
      if (!contestant) throw createError(404, 'Contestant not found');
      else res.status(204).json('Contestant deleted!');
    })
    .catch(err => res.status(400).json(err));
};

