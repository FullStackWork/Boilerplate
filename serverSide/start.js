const app = require('./express/app');
const { db } = require('./dataBase/db');
const port = 3000;

db.sync({ force: true }).then(() => {
  console.log('db synced');
  app.listen(port, () => console.log(`listening on port ${port}`));
});
