import { NextFunction, Request, Response } from "express";
import * as path from "path";
import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {
        app.route("*", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
        });
        app.route("/")
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET request succesfully"
                });
            });
        app.route("/")
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: "POST request succesfully"
                });
            });
        app.route("/")
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: "PUT request succesfully"
                });
            });
        app.route("/")
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: "DELETE request succesfully"
                });
            });

        app.route("/contact")
            .post(this.contactController.addNewContact);

        app.route("/contact")
            .get((req: Request, res: Response, next: NextFunction) => {
                if (req.query.key !== "abe97787ac28b755ad2857a93f44721ee067ded2") {
                    res.status(401).send("Key incorrect");
                } else {
                    next();
                }
            }, this.contactController.getContacts);

        app.route("/contact/:contactId")
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
