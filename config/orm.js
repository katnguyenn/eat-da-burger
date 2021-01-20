const connection = require("./connection.js");


const orm = {
    selectAll: function (tableInput, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, tableInput, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function (tableInput, colToSearch, valOfCol, cb) {
        const query = "INSERT INTO ?? ?? VALUES ?";
        connection.query(query, [tableInput, colToSearch, valOfCol], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (tableInput, objColVals, condition, cb) {
        const query = "UPDATE ?? SET ?? WHERE ?";
        connection.query(query, [tableInput, objColVals, condition], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}





module.exports = orm;