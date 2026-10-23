var express = require('express');
var router = express.Router();

const db = require('../utils/db.js');
const config = require('../utils/config.js')

const STATUSES = ['accepted', 'declined'];
const COMMENT_MAX_LENGTH = 2000;

// Express 4 does not catch errors thrown in async handlers: pass them to next()
const asyncRoute = (fn) => (req, res, next) => fn(req, res, next).catch(next);

const getSetting = async (key) => {
  const row = await db.hello.Settings.findOne({ where: { s_key: key } });
  return row ? row.s_value : null;
};

const parseJson = (value, fallback) => {
  if (typeof value !== 'string') return value ?? fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

router.get('/auth', asyncRoute(async (req, res, next) => {
  res.json({
    authenticated: req.user.authenticated,
    userId: req.user.user?.member_id || 0,
    name: req.user.user?.name || 'Гость',
    isAdmin: req.user.authenticated ? req.user.isAdmin() : false
  });
}));

router.get('/getApplyInfo', asyncRoute(async (req, res, next) => {
  const status = await getSetting('applyStatus');

  res.json({
    status: status !== null && status !== '0',
    openDate: await getSetting('applyOpenDate')
  });
}));

router.get('/getAllApplications', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  if(!(req.user.isAdmin())) return res.json({ status: 'error' });

  const applications = await db.hello.Application.findAll();

  res.json({
    list: applications,
  });
}));

router.post('/sendApplication', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  const canApply = await req.user.canApply();
  if(!canApply.status) return res.json({ status: 'error', message: canApply.reason })

  const fields = parseJson(await getSetting('applicationFields'), null);
  if(!Array.isArray(fields)) return res.json({ status: 'error' });

  const application = await db.hello.Application.create({
    userId: req.user.user.member_id,
    fields,
    values: req.body.form,
    status: 'processing',
    userName: req.user.user.name
  })

  res.json({ status: 'success' });
}));

router.post('/setStatus', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  if(!(req.user.isAdmin())) return res.json({ status: 'error' });
  
  const application = await db.hello.Application.findOne({
    where: {
      id: req.body.applicationId,
    }
  })

  if(!application) return res.json({ status: 'error' });

  if(application.status != 'processing') return res.json({ status: 'error' });

  if(!STATUSES.includes(req.body.status)) return res.json({ status: 'error' });

  application.status = req.body.status;

  await application.save();

  return res.json({ status: 'success' });
  
}));

router.post('/sendComment', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  if(req.body.admin) {
    if(!(req.user.isAdmin())) return res.json({ status: 'error' });
  }

  const application = await db.hello.Application.findOne({
    where: {
      id: req.body.applicationId,
    }
  })

  if(!application) return res.json({ status: 'error' });

  if(!req.body.admin && application.userId != req.user?.user?.member_id) return res.json({ status: 'error' });

  const text = req.body?.text;
  if(typeof text !== 'string' || text.trim().length < 3 || text.length > COMMENT_MAX_LENGTH) return res.json({ status: 'error' });

  const comment = await db.hello.Comment.create({
    userName: req.user.user.name,
    userId: req.user.user.member_id,
    avatar: config.forumLink + 'uploads/' + req.user.user.dataValues.pp_main_photo,
    applicationId: application.id,
    text,
    isAdmin: !!req.body.admin
  })

  res.json({ status: 'success' });
}));

router.post('/getApplication', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.sendStatus(401);

  const isAdmin = req.user.isAdmin();

  const application = await db.hello.Application.findOne({
    where: {
      id: req?.body?.id || 0
    },
    include: db.hello.Comment
  })

  if(!application) return res.json({ row: {} });

  if(!isAdmin && application?.userId != req.user?.user?.member_id) return res.json({ row: {}, fields: application?.fields });

  application.fields = parseJson(application.fields, []);
  application.values = parseJson(application.values, {});

  res.json({ row: application, fields: application?.fields });
}));

router.get('/getApplicationFields', asyncRoute(async (req, res, next) => {
  res.json({ fields: parseJson(await getSetting('applicationFields'), []) })
}));

router.get('/canApply', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.json({ status: false, reason: 'Вы не авторизованы на форуме.' });

  const canApply = await req.user.canApply();

  res.json({
    ...canApply
  });
}));

router.get('/getMyApplications', asyncRoute(async (req, res, next) => {
  if(!req.user.authenticated) return res.json({ list: [] });

  const applications = await db.hello.Application.findAll({ where: {
    userId: req.user.user.member_id,
  } })

  res.json({
    list: applications
  });
}));

module.exports = router;
