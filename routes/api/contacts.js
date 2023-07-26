import express from "express";
import contactsController from "../../controllers/contacts.js";
import contactsAddSchema from "../../schemas/contact.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);
contactsRouter.get("/:contactId", contactsController.getById);
contactsRouter.post("/", contactsController.addContact);

contactsRouter.put(
  "/:contactId",

  contactsController.updateContact
);

contactsRouter.delete("/:contactId", contactsController.deleteContact);

export default contactsRouter;
