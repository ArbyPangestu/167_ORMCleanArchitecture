const db = require('../models');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('database connected successfully.');

    await db.sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');

  } catch (error) {
    console.error('database connection error:', error);
    process.exit(1);

  }
}       