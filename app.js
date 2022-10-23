require('dotenv').config()
const sqlQueries = require('./sqlQuery')

// fetch all data 
sqlQueries.fetchAll()
    .then(([allData, fieldData]) => {
        console.log(allData);
        console.log(fieldData);
    })
    .catch(err => {
        console.log(err);
    });
