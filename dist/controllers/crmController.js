"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model("Contact", crmModel_1.ContactSchema);
class ContactController {
    addNewContact(req, res) {
        const newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getContacts(req, res) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.send(contact);
        });
    }
    getContactWithID(req, res) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.send(contact);
        });
    }
    updateContact(req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.send(contact);
        });
    }
    deleteContact(req, res) {
        Contact.remove({ _id: req.params.contactId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.send({ message: "Deleted contact" });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map