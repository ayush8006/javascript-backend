import mongoose from "mongoose"

const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specializedIn:[
        {
            types:String,
        }

    ],
    address1:{
        type:String,
        required:true,
    },
    address2:{
        type:String,
    },
    pinCode:{
        type:String,
        required:true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
},{timestamps:true})

export const Hospital=mongoose.model("Hospital",hospitalSchema);


