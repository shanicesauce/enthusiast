const router = require('express').Router();
const { User, Interest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: { exclude: ['password']},
    include: [
      {
        model: Interest,
        attributes: ['hobby'],
      },
    ],
  })
    .then((liUserData) => {
      const user = liUserData.dataValues;
      const interest = user.interest.dataValues.hobby;
      res.render('profile',
        {interest, user, loggedIn: true}
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ['password']},
    include: [
      {
        model: Interest,
        attributes: ['hobby'],
      },
    ],
  })
    .then((liUserData) => {
      const user = liUserData.dataValues;
      const interest = user.interest.dataValues.hobby;
      res.render('profile',
        {interest, user, loggedIn: true}
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: { exclude: ['password']},
    include: [
      {
        model: Interest,
        attributes: ['hobby'],
      },
    ],
  })
    .then((liUserData) => {
      const user = liUserData.dataValues;
      // const arrayData = Object.values(user);
      const interest = user.interest.dataValues.hobby;
      //pass data to template
      res.render('edit-profile', {
        interest, user,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;