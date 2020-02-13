const express = require('express');
const PostRouter = require('./posts/postRouter.js');
const UserRouter = require('./users/userRouter.js');
const server = express();
server.use(express.json());
server.get('/', logger, (req, res) => {
  res.json(`<h2>Let's write some middleware!</h2>`);
});
//custom middleware
server.use('/api/posts', logger, PostRouter);
server.use('/api/posts', logger, UserRouter);
function logger(req, res, next) {
  const timeStamp = new Date(Date.now());
    console.log(
        `/n${req.method} method made to ${req.originalUrl} at ${timeStamp.toLocaleDateString('en-US')}`
    );
    next();
}
module.exports = server;
