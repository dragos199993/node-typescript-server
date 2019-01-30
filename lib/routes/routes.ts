import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {
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
    }
}
