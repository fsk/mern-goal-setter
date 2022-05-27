const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    }
    catch(error) {
        console.log('error: ', error )
        process.exit(1)
    }
}

module.exports = connectDb

// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = process.env.MONGO_URI

// module.exports = function () {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     client.connect(err => {
//         const collection = client.db("GoalSetter").collection("devices");
//         console.log(collection);
//         // perform actions on the collection object
//         //client.close();
//     });
// }