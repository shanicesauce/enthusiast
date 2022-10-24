const router = require('express').Router();
const { User, Interest, InterestLevel } = require('../models');
const withAuth = require('../utils/auth');

router.get('/profile/:id', withAuth, (req, res) => {
  User.findByPk(req.params.id, {
    individualHooks: true,
    attributes: { exclude: ['password'] },
    include: [
      {
        model: User,
        attributes: ['name_first', 'name_last', 'email']
      },
      {
        model: Interest,
        attributes: ['hobby'],
      },
      {
        model: InterestLevel,
        attributes: ['id','level'] ,
      }
    ],
  })
    .then((dbUserData) => {
      const user = dbUserData.map((user) => user.get({ plain: true }));
      res.render('profile', { user, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;