import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "18122018",
    database: "bagaggio"
})
connection.connect()

export default connection;