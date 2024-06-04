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
        await mongoose.connect("mongodb+srv://4ashokshi:5HtNOgewCDGBkXqY@promptopia.qx4efi0.mongodb.net/?retryWrites=true&w=majority&appName=promptopia", {
            dbName: "promptopia",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected= true;
        console.log('Database Connected.')
    } catch (error) {
        console.log(error);
        
    }
}