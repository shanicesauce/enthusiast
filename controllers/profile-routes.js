const router = require('express').Router();
const { User, Interest
  // , InterestLevel
} = require('../models');
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
    //   {
    //     model: InterestLevel,
    //     attributes: ['id','level'] ,
    //   }
    ],
  })
    .then((liUserData) => {
      const user = liUserData.dataValues;
      // const arrayData = Object.values(user);
      const interest = user.interest.dataValues.hobby;
      // Object.values(user.interest.dataValues);
      // const userData = {user, interestData};
      // const users = userData.map((user) => user.get({ plain: true }));
      res.render('profile',
        {interest, user, loggedIn: true}
        // console.log('/////'),
        // console.log(user)
        // console.log(interestData)
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;