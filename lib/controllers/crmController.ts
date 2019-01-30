import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {
    public addNewContact(req: Request, res: Response) {
        const newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}
