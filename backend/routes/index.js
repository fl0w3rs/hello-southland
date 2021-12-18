const { application } = require('express');
var express = require('express');
var router = express.Router();

const db = require('../utils/db.js');

/* GET home page. */
router.get('/auth', async (req, res, next) => {
  res.json({
    authenticated: req.user.authenticated,
    userId: req.user.user?.member_id || 0,
    name: req.user.user?.name || 'Гость',
    isAdmin: req.user.authenticated ? req.user.isAdmin() : false
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

router.post('/sendApplication', async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  const canApply = await req.user.canApply();
  if(!canApply.status) return res.json({ status: 'error', message: canApply.reason })

  const fields = await db.hello.Settings.findOne({
    where: { s_key: 'applicationFields' }
  });

  const application = await db.hello.Application.create({
    userId: req.user.user.member_id,
    fields: JSON.parse(fields.s_value),
    values: req.body.form,
    status: 'processing'
  })

  res.json({ status: 'success' });
})

router.post('/sendComment', async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  if(req.body.admin) {
    if(!(await req.user.isAdmin())) return res.json({ status: 'error' });
  }

  const application = await db.hello.Application.findOne({
    where: {
      id: req.body.applicationId,
    }
  })

  if(!application) return res.json({ status: 'error' });

  if(!req.body.admin && application.userId != req.user?.user?.member_id) return res.json({ status: 'error' });

  if(req.body?.text?.length  < 3) return res.json({ status: 'error' });

  const comment = await db.hello.Comment.create({
    userName: req.user.user.name,
    userId: req.user.user.member_id,
    applicationId: application.id,
    text: req.body.text,
    isAdmin: !!req.body.admin
  })

  res.json({ status: 'success' });
})

router.post('/getApplication', async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  const isAdmin = await req.user.isAdmin();

  const application = await db.hello.Application.findOne({
    where: {
      id: req?.body?.id || 0
    },
    include: db.hello.Comment
  })

  if(!application) return res.json({ row: {} });

  if(!isAdmin && application?.userId != req.user?.user?.member_id) return res.json({ row: {}, fields: application?.fields });

  res.json({ row: application, fields: application?.fields });
})

router.get('/getApplicationFields', async (req, res, next) => {
  const fields = await db.hello.Settings.findOne({
    where: { s_key: 'applicationFields' }
  });

  const fieldsParsed = JSON.parse(fields.s_value);

  res.json({ fields: fieldsParsed })
})

router.get('/canApply', async (req, res, next) => {
  if(!req.user.authenticated) return res.json({ status: false, reason: 'Вы не авторизованы на форуме.' });

  const canApply = await req.user.canApply();

  res.json({
    ...canApply
  });
});

router.get('/getMyApplications', async (req, res, next) => {
  if(!req.user.authenticated) return res.json({ list: [] });

  const applications = await db.hello.Application.findAll({ where: {
    userId: req.user.user.member_id,
  } })

  res.json({
    list: applications
  });
});

module.exports = router;
