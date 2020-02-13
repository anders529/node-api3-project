const express = require('express');
const db = require('./userDb.js');
const router = express.Router();
router.post('/', (req, res) => {
  db.insert(req.body)
      .then(user => {
          res.status(201).json(user);
      }).catch(error => {
          console.log(error);
          res.status(500).json({message:'Error adding User.'});
  });
});
router.post("/:id/posts", validatePost, validateUserId, (req, res) => {
    const newPost = {...req.body, user_id: req.user.id};
    Posts.insert(newPost)
        .then(post => {res.status(201).json(post)})
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error adding post." });
        });
});
router.get('/', (req, res) => {
    db.get()
        .then(user => {
            if (user)
            {res.status(201).json({errorMessage:'The users information could not be retrieved.'})}
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({});
        });
});
router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
