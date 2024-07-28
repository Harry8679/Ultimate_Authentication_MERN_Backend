const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    role: {
        type: String,
        default: 'Subscriber'
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamps: true });

userSchema.virtual('password')
    .set(function(password) {
        // Create a temporary variable called _password
        this._password = password;
        // Generate salt
        this.salt = this.makeSalt();
        // Encrypt Password
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

module.exports = mongoose.model('User', userSchema);