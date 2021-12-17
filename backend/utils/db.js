const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config.js');

const forum = {
  db: new Sequelize(config.db.forum.database, config.db.forum.username, config.db.forum.password, {
    host: config.db.forum.host,
    dialect: config.db.forum.dialect,
    dialectOptions: {}
  }),
};

forum.core_members_known_devices = forum.db.define('core_members_known_devices',
  {
    device_key: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    member_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    login_key: {
      type: DataTypes.STRING(32),
    },
  },
  {
    tableName: 'core_members_known_devices',
  }
);

forum.core_members = forum.db.define('core_members',
  {
    member_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    member_group_id: {
      type: DataTypes.SMALLINT,
    },
    mgroup_others: {
      type: DataTypes.STRING(245),
    },
  },
  {
    tableName: 'core_members',
  }
);

const hello = {
  db: new Sequelize(config.db.hello.database, config.db.hello.username, config.db.hello.password, {
    host: config.db.hello.host,
    dialect: config.db.hello.dialect,
    dialectOptions: {}
  }),
};

module.exports = {
  forum,
  hello,
};