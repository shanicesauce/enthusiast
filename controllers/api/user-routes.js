const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const {User, Post, Love, Comment, Interest, InterestLevel, } = require('../../models');
const withAuth = require('../../utils/auth');

//GET /api/users
router.get('/', (req, res) => {
  //access user model and run find all
  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Interest,
        attributes: ['hobby'],
      },
      {
        model: InterestLevel,
        attributes: ['level'] ,
      },
      {
        model: Post,
        attributes: ['id', 'post_text', 'created_at'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['post_text'],
        },
      },
      // {
      //   model: Post,
      //   through: Love,
      //   as: 'loved_post',
      //   attributes: ['post_text'],
      // },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user found, look again' });
      }
      res.json(dbUserData);
      return;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//new user
router.post('/', (req, res) => {
  //expects {username: 'name', email:'name@email.com, password: 'password1}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    name_first: req.body.name_first,
    name_last: req.body.name_last,
    interest_id: req.body.interest,
  })
    .then((dbUserData) => {
      console.log(dbUserData);
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.logIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST /api/users/login
router.post('/login', (req, res) => {
  //expects {username: 'name', password: 'password1}
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      req.session.interest_id = dbUserData.interest_id;

      res.json({ user: dbUserData, message: 'Welcome to the site!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//update user info
router.put('/:id', withAuth, (req, res) => {
  //expects {username: 'name', email:'name@email.com, password: 'password1}
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE user
router.delete('/:id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
