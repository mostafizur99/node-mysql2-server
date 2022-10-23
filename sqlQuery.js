const db = require('./dbConnect')

const sqlQueries = {
    fetchAll: () => {
        return db.execute('SELECT * FROM employee_data')
    }

}

module.exports = sqlQueries;