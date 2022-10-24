const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

<<<<<<< HEAD
router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/profile/:id', withAuth, (req, res) => {
  User.findByPk(req.params.id, {
=======
router.get('/', withAuth, (req, res) => {
  User.findOne({
    where: {
      id: req.session.id,
    },
>>>>>>> 114f835ab3d6508c513eb3ae7e6ad7e26a157556
    individualHooks: true,
    attributes: { exclude: ['password'] },
    // include: [
    //   {
    //     model: User,
    //     attributes: ['name_first', 'name_last', 'email']
    //   },
    //   {
    //     model: Interest,
    //     attributes: ['hobby'],
    //   },
    //   {
    //     model: InterestLevel,
    //     attributes: ['id','level'] ,
    //   }
    // ],
  })
    .then((dbUserData) => {
      // const users = dbUserData.map((user) => user.get({ plain: true }));
      // res.render('profile', { users, loggedIn: true });
      res.render('profile', dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;