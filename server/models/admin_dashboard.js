const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin_dashboard = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    value: String,
});

module.exports = mongoose.model('admin_dashboard', admin_dashboard);
