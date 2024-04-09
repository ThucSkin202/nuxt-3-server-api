import Joi from "joi";

// author validation
export const AuthorSchema = Joi.object({
	name: Joi.string().min(3).required(),
});

// book validation
export const BookSchema = Joi.object({
	title: Joi.string().min(3).required(),
	isbn: Joi.string().min(3).required(),
	authors: Joi.array(),
	published: Joi.date().required(),
	pageCount: Joi.number(),
});

// user validation
export const UserSchema = Joi.object({
	name: Joi.string().min(3).required(),
	gender: Joi.string().valid('male', 'female', 'other').required(),
	address: Joi.string().required(),
	phone: Joi.string().required(),
});


