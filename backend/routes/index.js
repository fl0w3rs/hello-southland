const { application } = require('express');
var express = require('express');
var router = express.Router();

const db = require('../utils/db.js');

/* GET home page. */
router.get('/auth', async (req, res, next) => {
  res.json({
    authenticated: req.user.authenticated,
    name: req.user.user.name,
    isAdmin: req.user.isAdmin()
  });
});

router.get('/getApplyInfo', async (req, res, next) => {
  const status = await db.hello.Settings.findOne({ where: {
    s_key: 'applyStatus'
  } })

  const openDate = await db.hello.Settings.findOne({ where: {
    s_key: 'applyOpenDate'
  } })

  res.json({
    status: !!status.s_value || false,
    openDate: openDate.s_value || null
  });
});

router.get('/canApply', async (req, res, next) => {
  const status = await db.hello.Settings.findOne({ where: {
    s_key: 'applyStatus'
  } })

  const applications = await db.hello.Application.findAll({ where: {
    userId: req.user.user.member_id,
    status: 'processing',
  } })

  let canApply = true;
  let reason = '';

  if(applications.length > 0) {
    canApply = false;
    reason = 'У Вас уже есть активная заявка.';
  }

  if(status.s_value == '0') {
    canApply = false;
    reason = 'Приём заявок закрыт.';
  }

  res.json({
    status: canApply, reason
  });
});

router.get('/getMyApplications', async (req, res, next) => {
  const applications = await db.hello.Application.findAll({ where: {
    userId: req.user.user.member_id,
  } })

  res.json({
    list: applications
  });
});

module.exports = router;
