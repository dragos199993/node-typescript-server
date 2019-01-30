"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routes = new routes_1.Routes();
        this.mongoUrl = process.env.MONGO_URI;
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        require("mongoose").Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map