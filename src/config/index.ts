import  mongoose from 'mongoose'

mongoose.connection.on("disconnected", ()=>{
    console.log("Successfully disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("Successfully connection")
})

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://matthabbey:1234567890@cluster0.yljq9bx.mongodb.net/test")

        console.log(`MongoDB Connected `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export const MONGO_DB = process.env.MONGO_DB as string

export default connectDB