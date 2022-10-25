const router = require('express').Router();
const { User,
  // Interest, InterestLevel
} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: { exclude: ['password'] }
    // include: [
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
    .then((liUserData) => {
      const user = liUserData.dataValues;
      // const arrayData = Object.keys(data);
      // const users = data.map((user) => user.get({ plain: true }));
      res.render('profile', { user , loggedIn: true});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;