const path = require("path");
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
 

// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncaught Exception`)
    process.exit(1);
});


// config
dotenv.config({path:"backend/config/config.env"});

// Connect Database
connectDatabase();
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`) 
})


//unhandled Promise Rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server ue to unhanled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});