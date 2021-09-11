const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/GraceShopper',
  {
    logging: false,
  }
);
const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.beforeCreate(function (user) {
  const password = user.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  user.password = hash;
});
module.exports = { db, User };
