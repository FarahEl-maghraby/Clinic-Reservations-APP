const mongoose = require('mongoose')
const validator = require('validator')

DataSchema = new mongoose.Schema({

    requestID:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        required:true,
        maxlength:50,
        minlength:2,
        trim:true
    },

    email:{
        type:String,
        required:true,
        minlength:5,
        validate(value)
        {
        if(! validator.isEmail(value))
        {
            throw new Error('Enter a valid Email')
        }
        }
    },

    age:{
        type:Number,
        maxlength:50,
        minlength:2,
        trim:true
    },

    doctor:{
        type:String,
        trim:true
    },

    description:{
        type:String,
        trim:true
    },

    img:{
        type:String,
        trim:true
    },

    status:{
      type:Boolean,
      default:false
    }

})




const Data = mongoose.model('Data',DataSchema)
module.exports = Data