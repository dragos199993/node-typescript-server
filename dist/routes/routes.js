"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route("/api/")
            .get((req, res) => {
            res.status(200).send({
                message: "GET request succesfully"
            });
        });
        app.route("/api/")
            .post((req, res) => {
            res.status(200).send({
                message: "POST request succesfully"
            });
        });
        app.route("/api/")
            .put((req, res) => {
            res.status(200).send({
                message: "PUT request succesfully"
            });
        });
        app.route("/api/")
            .delete((req, res) => {
            res.status(200).send({
                message: "DELETE request succesfully"
            });
        });
        app.route("/api/contact")
            .post(this.contactController.addNewContact);
        app.route("/api/contact")
            .get((req, res, next) => {
            if (req.query.key !== "abe97787ac28b755ad2857a93f44721ee067ded2") {
                res.status(401).send("Key incorrect");
            }
            else {
                next();
            }
        }, this.contactController.getContacts);
        app.route("/api/contact/:contactId")
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
        app.route("*", (req, res) => {
            res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map