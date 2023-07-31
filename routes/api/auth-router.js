import express from "express";
import { validateBody } from "../../decorators/index.js";
import usersSchema from "../../schemas/users-schema.js";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(usersSchema.userSignupSchema),
  authController.signup
);

authRouter.post(
  "/signin",
  validateBody(usersSchema.userSignupSchema),
  authController.signin
);

export default authRouter;
