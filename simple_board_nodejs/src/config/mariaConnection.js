module.exports = () => {
    const mariaDB = require('mariadb');
    const dbInfo = {
        host : 'localhost',
        port : 3306,
        database : 'todolist',
        user : 'root',
        password : 'spring1234'
    }

    return mariaDB.createConnection(dbInfo);
}