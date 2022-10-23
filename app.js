require('dotenv').config()
const sqlQueries = require('./sqlQuery')

// =======fetch all data==========
// sqlQueries.fetchAll()
//     .then(([allData, fieldData]) => {
//         console.log(allData);
//         console.log(fieldData);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// =======insert data==========
const insertData = {
    name: 'John Young',
    age: '28',
    gender: 'Male',
    salary: '3000'
}
sqlQueries.insert(insertData)
    .then(() => {
        console.log('Data Inserted Successfully');
    })
    .catch(err => {
        console.error('Data Insertion Failed', err);
    });

