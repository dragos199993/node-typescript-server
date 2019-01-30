import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import { Routes } from "./routes/routes";

class App {
    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoUrl: string = "mongodb://admin:admin12@ds036617.mlab.com:36617/deploy-test";
    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        require("mongoose").Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true
        });
    }
}

export default new App().app;
