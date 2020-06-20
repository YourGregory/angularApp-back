const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.students = require('../model/student.model.js')(sequelize, Sequelize);
db.groups = require('../model/group.model')(sequelize, Sequelize);
db.subjects = require('../model/subject.model')(sequelize, Sequelize);
db.teachers = require('../model/teacher.model')(sequelize, Sequelize);
db.marks = require('../model/mark.model')(sequelize, Sequelize);
db.users = require('../model/user.model')(sequelize, Sequelize);

module.exports = db;