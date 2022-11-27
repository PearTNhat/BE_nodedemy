const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DB_Nodemy');
const Schema = mongoose.Schema;
const Account = new Schema(
    {
        username: String,
        password: String,
    },
    {
        collection: 'account',
    },
);
const AccountModel = mongoose.model('accountModel', Account);
module.exports = AccountModel;
