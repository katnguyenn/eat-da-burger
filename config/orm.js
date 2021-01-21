const connection = require("./connection.js");

// Helper function to loop through and create array of question marks and turn it into a string
const questionMarks = num => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper functon to convert object key/value pairs to SQL syntax

const objToSql = ob => {
    const arr = [];

    // Loop through the keys and push pair as a string into arr
    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (tableInput, cb) {
        const query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: function (tableInput, colToSearch, valOfCol, cb) {
        const query = "INSERT INTO " + tableInput;

    query += " (";
    query += colToSearch.toString();
    query += ") ";
    query += "VALUES (";
    query += questionMarks(vals.length);
    query += ") ";

    console.log(query);

        connection.query(query, valOfCol, function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (tableInput, objColVals, condition, cb) {
        const query = "UPDATE " + tableInput;

    query += " SET ";
    query += objToSql(objColVals);
    query += " WHERE ";
    query += condition;

    console.log(query);

        connection.query(query, function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
}





module.exports = orm;