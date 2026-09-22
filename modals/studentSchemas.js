const mongoose=require("mongoose")
const studentSchema=new mongoose.createSchema({
    Name:{
        type:String,
        require:true
    },
    Class:{
        type:String,
        require:true
    },
    RollNo:{
        type:Number,
        require:true
    },
    Section:{
        type:String,
        require:true
    }

    
})
const studentModel=mongoose.model("student",studentSchema)

module.exports = studentModel