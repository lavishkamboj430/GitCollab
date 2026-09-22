const mongoose=require('mongoose')
const { type } = require('node:os')
// const { type } = require('node:os')
const studentSchema=new mongoose.createSchema({
    name:{
        type:String,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    rollNo:{
        type:Number,
        require:true
    },
    section:{
        type:String,
        require:true
    }

    
})
const studentModel=mongoose.model("student",studentSchema)
module.exports=studentModel; 