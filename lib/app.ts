import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import * as path from "path";
import { Routes } from "./routes/routes";

class App {
    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoUrl: string = process.env.MONGOLAB_URI;
    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(express.static(path.join(__dirname, "..", "client/build")));
        this.app.use(cors());
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
