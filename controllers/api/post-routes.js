const router = require('express').Router();
const { Post, User, Like, Comment, Interest, InterestLevel } = require('../../models');
// const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const multer = require('multer');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_text',
      'created_at'
      // [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'),'like_count',],
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
          model: InterestLevel,
          attributes: ['id', 'level']
        },
        include:{
          model: Interest,
          attributes: ['id','hobby'],
        },
        include:{
          model: InterestLevel,
          attributes: ['id','level'],
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
      'post_text',
      'created_at'
      // [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'),'like_count',],
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
        include:{
          model: Interest,
          attributes: ['id','hobby'],
        },
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
router.post('/', withAuth, (req, res) => {
  //expects { post_text: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
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
