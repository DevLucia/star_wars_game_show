const mongoose = require('mongoose');

const emailRegEx = /(.+)@(.+){2,}\.(.+){2,}/i;
const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const contestantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'We need your first name.'
    },
    last_name: {
        type: String,
        required: 'We need your last name.'
    },
    birth_date: {
        type: String,
        required: 'We need your birth date.',
    },
    phone: {
        type: String,
        required: 'We need your mobile phone.',
        validate: phoneRegEx,
    },
    country: {
        type: String,
        required: 'We need your country phone.',
        default: 'Spain'
    },
    email: {
        type: String,
        required: 'Email is required.',
        validate: emailRegEx
    },
    character: {
        type: String,
        required: 'We need the character you will portray.',
    },
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

const Contestant = mongoose.model('Contestant', contestantSchema);

module.exports = Contestant;