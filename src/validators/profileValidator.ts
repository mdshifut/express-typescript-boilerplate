import Joi from "@hapi/joi";

const profileValidator = Joi.object().keys({
  firstName: Joi.string()
    .trim()
    .required()
    .empty()
    .min(3)
    .max(20)
    .messages({
      "string.base": `firstName should be a type of 'text'.`,
      "string.empty": `firstName cannot be an empty field.`,
      "string.min": `firstName should have a minimum length of {#limit}.`,
      "string.max": `firstName should have a maximum length of {#limit}.`,
      "any.required": `firstName is required.`
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .empty()
    .min(3)
    .max(20)
    .messages({
      "string.base": `lastName should be a type of 'text'.`,
      "string.empty": `lastName cannot be an empty field.`,
      "string.min": `lastName should have a minimum length of {#limit}.`,
      "string.max": `lastName should have a maximum length of {#limit}.`,
      "any.required": `lastName is required.`
    }),
  email: Joi.string()
    .trim()
    .required()
    .empty()
    .email()
    .messages({
      "string.base": `email should be a type of 'text'.`,
      "string.empty": `email cannot be an empty field.`,
      "string.email": `{#value}  is a invalid email.`,
      "any.required": `email is required.`
    }),
  phone: Joi.string()
    .trim()
    .required()
    .empty()
    .min(5)
    .messages({
      "string.base": `phone should be a type of 'text'`,
      "string.empty": `phone cannot be an empty field`,
      "string.min": `phone should have a minimum length of {#limit}`,
      "any.required": `phone is required`
    })
});

export default (value: any) => profileValidator.validate(value);
