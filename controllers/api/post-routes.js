const router = require('express').Router();
const { Post, User, Like, Comment, Interest } = require('../../models');
// const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
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
      // [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at',],
        include: {
          model: User,
          attributes: ['username']
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
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
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
      // [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
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
  Post.create({
    image: req.body.file,
    post_text: req.body.post_text,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put api/posts/uplike
router.put('/uplike', withAuth, (req, res) => {
  if (req.session) {
    Post.uplike(
      { ...req.body, user_id: req.session.user_id },
      { Like, Comment, User }
    )
      .then((updatedLikeData) => res.json(updatedLikeData))
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
