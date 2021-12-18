module.exports = {
  ipsPrefix: 'sp_',
  adminGroups: [4],
  forumLink: 'https://southland.fl0w3rs.dev/',
  db: {
    forum: {
      dialect: 'mysql',
  
      host: 'localhost',
      database: 'sp_forum',
      username: 'sp_forum_usr',
      password: 'tBrKnbtCTwJNjb4D',
    },
    hello: {
      dialect: 'mysql',
  
      host: 'localhost',
      database: 'sp_hello',
      username: 'sp_hello_usr',
      password: 'dwrGXzrMftN9brb5',
    },
  }
}