const mongoose=require('mongoose')

const FeedbackSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    favouriteteam:{
        type:String,
        require:true,
    },
    feedback:{
        type:String,
        require:true,
    },
    rating:{
        type:String,
        require:true,
    },
})

const Feedback=mongoose.model("Feedback",FeedbackSchema)

module.exports=Feedback