import "reflect-metadata";
import AWS from 'aws-sdk';
import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { AppController } from "./AppController";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [AppController] // we specify controllers we want to use
});

app.listen(80);
