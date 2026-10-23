const env = process.env;

const dbConfig = (prefix) => ({
  dialect: 'mysql',

  host: env[`${prefix}_DB_HOST`] || 'localhost',
  database: env[`${prefix}_DB_NAME`],
  username: env[`${prefix}_DB_USER`],
  password: env[`${prefix}_DB_PASSWORD`],
});

module.exports = {
  ipsPrefix: env.IPS_COOKIE_PREFIX || 'sp_',
  adminGroups: (env.ADMIN_GROUPS || '4,57,20').split(',').map(Number),
  forumLink: env.FORUM_URL || 'https://forum.example.com/',
  db: {
    forum: dbConfig('FORUM'),
    hello: dbConfig('HELLO'),
  }
}
