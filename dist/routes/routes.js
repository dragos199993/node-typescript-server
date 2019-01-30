"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route("*", (req, res) => {
            res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
        });
        app.route("/")
            .get((req, res) => {
            res.status(200).send({
                message: "GET request succesfully"
            });
        });
        app.route("/")
            .post((req, res) => {
            res.status(200).send({
                message: "POST request succesfully"
            });
        });
        app.route("/")
            .put((req, res) => {
            res.status(200).send({
                message: "PUT request succesfully"
            });
        });
        app.route("/")
            .delete((req, res) => {
            res.status(200).send({
                message: "DELETE request succesfully"
            });
        });
        app.route("/contact")
            .post(this.contactController.addNewContact);
        app.route("/contact")
            .get((req, res, next) => {
            if (req.query.key !== "abe97787ac28b755ad2857a93f44721ee067ded2") {
                res.status(401).send("Key incorrect");
            }
            else {
                next();
            }
        }, this.contactController.getContacts);
        app.route("/contact/:contactId")
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map