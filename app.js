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
// const insertData = {
//     name: 'John Young',
//     age: '28',
//     gender: 'Male',
//     salary: '3000'
// }
// sqlQueries.insert(insertData)
//     .then(() => {
//         console.log('Data Inserted Successfully');
//     })
//     .catch(err => {
//         console.error('Data Insertion Failed', err);
//     });


// =======get single data by id==========
const itemId = 3
sqlQueries.findById(itemId)
    .then(([singleItem]) => {
        console.log('Data Fetched Successfully', singleItem[0]);
    })
    .catch(err => {
        console.error('Failed to Fetch Data', err);
    });

