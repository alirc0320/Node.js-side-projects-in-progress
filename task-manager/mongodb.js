//const mongodb = require("mongodb-legacy");

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    // Callback function executed after connecting to MongoDB
    if (error) {
      return console.log("unable to connect to the database");
    }
    const db = client.db(databaseName);

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("64824b85b18c64f7db52fc35"),
    //     },
    //     {
    //       $inc: {
    //         Age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .deleteMany({
        Age: 19,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("tasks")
      .deleteOne({
        description: "Clean the house",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
