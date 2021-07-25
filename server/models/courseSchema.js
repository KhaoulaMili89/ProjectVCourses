const mongoose=require('mongoose')
const schema=mongoose.Schema();
const courseSchema = new mongoose.Schema ({
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    },
    /* instructor: { type: Schema.Types.ObjectId, ref: "User" },
    category: { type: Schema.Types.String, ref: "Category" } */
},
{ timestamps : { createdAt: 'created_at'}})

module.exports=mongoose.model('course',courseSchema)