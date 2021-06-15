const mongoose= require('mongoose');
const userSchema = mongoose.Schema({

    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    city:{
        type: String,

    },
    mail: {
        type:String
    },
    tel: {
        type: Number,
    },
});

module.exports = mongoose.model('User', userSchema);
