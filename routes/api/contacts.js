import express from "express";
import contactsController from "../../controllers/contacts.js";
import schema from "../../schemas/contacts-schema.js";
import { isEmptyBody, isValidId } from "../../midlewars/index.js";
import { validateBody } from "../../decorators/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:contactId", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(schema.contactsAddSchema),
  contactsController.addContact
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(schema.contactsAddSchema),
  contactsController.updateContact
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(schema.contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);

contactsRouter.delete(
  "/:contactId",
  isValidId,
  contactsController.deleteContact
);

export default contactsRouter;
