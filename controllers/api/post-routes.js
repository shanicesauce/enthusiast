/* eslint-disable indent */
const router = require('express').Router();
const { Post, User, Love, Comment, Interest } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const multer = require('multer');
// const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'image',
      'post_text',
      'created_at',
      'interest_id',
      [sequelize.literal('(SELECT COUNT(*) FROM love WHERE post.id = love.post_id)'), 'love_count']
    ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
        include: {
          model: Interest,
          attributes: ['id', 'hobby'],
        },
      },
      // {
      //   model: Interest,
      //   attributes: ['id', 'hobby'],
      // },
    ],
  })
    .then((dbPostData) => {
     res.json(dbPostData);
     console.log(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'image',
      'post_text',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM love WHERE post.id = love.post_id)'), 'love_count'],
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
        // include: {
        //   model: Interest,
        //   attributes: ['id', 'hobby'],
        // },
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create post
router.post('/', upload.single('image'), withAuth, (req, res) => {
  //expects { post_text: 'https://taskmaster.com/press', user_id: 1}
  console.log(JSON.stringify(req.file));
  if (req.file) {
    Post.create({
      image: req.file.filename,
      post_text: req.body.post_text,
      interest_id: req.body.interest,
      user_id: req.session.user_id,
    })
      // eslint-disable-next-line no-unused-vars
      .then((dbPostData) =>
      res.redirect('/dashboard')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }else{
    Post.create({
      post_text: req.body.post_text,
      interest_id: req.body.interest,
      user_id: req.session.user_id,
    })
      // eslint-disable-next-line no-unused-vars
      .then((dbPostData) =>
      res.redirect('/dashboard'))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//create post
router.post('/', withAuth, (req, res) => {
  //expects { post_text: 'https://taskmaster.com/press', user_id: 1}
  console.log(JSON.stringify(req.file));
  Post.create({
    post_text: req.body.post_text,
    interest_id: req.body.interest,
    user_id: req.session.user_id,
  })
    // eslint-disable-next-line no-unused-vars
    .then((dbPostData) =>
    //  res.redirect('/dashboard')
     console.log(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put api/posts/uplove
router.put('/uplove', withAuth, (req, res) => {
  if (req.session) {
    Post.uplove(
      { ...req.body, user_id: req.session.user_id },
      { Love, Comment, User }
    )
      .then((updatedloveData) => res.json(updatedloveData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//update existing entry
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      post_text: req.body.post_text,
      interest_id: req.body.interest_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete post
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
