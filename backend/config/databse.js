const { Sequelize } = require('sequelize');
const config = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: 'postgres', // Specify 'postgres' as the dialect
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< THIS LINE
            }
        }
    }
);

module.exports = sequelize;
