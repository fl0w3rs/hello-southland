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
    pp_main_photo: {
      type: DataTypes.TEXT
    }
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

hello.Settings = hello.db.define('settings',
  {
    s_key: {
      type: DataTypes.STRING(65),
      primaryKey: true,
    },
    s_value: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: 'settings',
  }
);

hello.Application = hello.db.define('applications',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING(255),
    fields: DataTypes.JSON,
    values: DataTypes.JSON,
    status: DataTypes.STRING(32),
  }, {
    tableName: 'applications'
  }
)

hello.Comment = hello.db.define('comments',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: DataTypes.STRING(256),
    userId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
    text: DataTypes.TEXT,
    avatar: DataTypes.TEXT,
  }, {
    tableName: 'comments'
  }
)

hello.Application.hasMany(hello.Comment);
hello.Comment.belongsTo(hello.Application);

module.exports = {
  forum,
  hello,
};