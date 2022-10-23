require('dotenv').config()
const db = require('./dbConnect')

db.execute('SELECT * FROM employee_data')
    .then(result => {
        console.log(result[0]);
    })
    .catch(err => {
        console.log(err);
    });
