var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/auth', async (req, res, next) => {
  res.json({
    authenticated: req.user.authenticated,
    name: req.user.user.name,
    isAdmin: req.user.isAdmin()
  });
});

module.exports = router;
