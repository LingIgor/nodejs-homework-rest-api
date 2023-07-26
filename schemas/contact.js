import Joi from "joi"


const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required().messages({
    "string.email": "Incorrect E-Mail Address",
    "any.required": "Email is required. Please provide an email address.",
  }),
  phone: Joi.string()
    .pattern(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)
    .required(),
    favorite: Joi.boolean(),
});

export default contactsAddSchema;