const router = require('express').Router();
const { User, Post, Like, Comment, Interest } = require('../../models');
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
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_text', 'created_at'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['title'],
        },
      },
      {
        model: Post,
        attributes: ['title'],
        through: Like,
        as: 'liked_post',
      },
      {
        model: Interest,
        attributes: [''] ,
      }
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.json(dbUserData);
      }
      res.status(400).json({ message: 'No user found, look again' });
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
    hobby: req.body.hobby
  }).then((dbUserData) => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.logIn = true;

      res.json(dbUserData);
    });
  })
    .catch(err => {
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