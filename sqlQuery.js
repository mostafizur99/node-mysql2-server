const db = require('./dbConnect')

const sqlQueries = {
    fetchAll: () => {
        return db.execute('SELECT * FROM employee_data')
    },
    insert: (insertData) => {
        return db.execute(
            'INSERT INTO employee_data (name, age, gender, salary) VALUES(?, ?, ?, ?)', [insertData.name, insertData.age, insertData.gender, insertData.salary]
        );
    },
    findById: (ID) => {
        return db.execute('SELECT * FROM employee_data WHERE employee_data.id =?', [ID]
        );
    }


}

module.exports = sqlQueries;