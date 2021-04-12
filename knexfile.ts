import path from 'path';

module.exports = {
    client: 'mysql2',
    connection:{
        filename: path.resolve(__dirname, 'src', 'database', 'database.mysql2')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};