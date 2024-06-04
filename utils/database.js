import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
// changed "process.env.MONGODB_URI" to the real url
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptopia",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })

        isConnected= true;
        console.log('Database Connected.')
    } catch (error) {
        console.log(error);
        
    }
}