import { Request, Response } from "express";
import * as path from "path";
import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {

        app.route("*", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
            console.log(path.join(__dirname, "..", "client/build/index.html"));
        });
        
        app.route("/api/contact")
            .post(this.contactController.addNewContact);

        app.route("/api/contact")
            // .get((req: Request, res: Response, next: NextFunction) => {
            //     if (req.query.key !== "abe97787ac28b755ad2857a93f44721ee067ded2") {
            //         res.status(401).send("Key incorrect");
            //     } else {
            //         next();
            //     }, }
            .get(this.contactController.getContacts);

        app.route("/api/contact/:contactId")
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
