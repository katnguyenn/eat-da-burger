// Import ORM to create functions that will interact with the database.
const orm = require("../config/orm");


// Code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (colToSearch, valOfCol, cb) {
        orm.insertOne("burgers", colToSearch, valOfCol, function (res) {
            cb(res);

        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

};


// Export the database functions for the controller
module.exports = burger;