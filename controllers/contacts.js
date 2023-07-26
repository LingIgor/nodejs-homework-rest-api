// import express from "express";
// import Joi from "joi";
// import contactsService from "../../models/contacts.js";
import { HttpError } from "../helpers/index.js";
import Contact from "../models/contact.js";
import { ctrlWrapper } from "../decorators/index.js";

// const contactsRouter = express.Router();

// const contactsAddSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required().messages({
//     "string.email": "Incorrect E-Mail Address",
//     "any.required": "Email is required. Please provide an email address.",
//   }),
//   phone: Joi.string()
//     .pattern(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)
//     .required(),
//     favorite: Joi.boolean(),
// });

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `missing field favorite`);
  }
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteContact: ctrlWrapper(deleteContact),
};
