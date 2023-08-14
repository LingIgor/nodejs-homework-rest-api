import express from "express";
import { validateBody } from "../../decorators/index.js";
import usersSchema from "../../schemas/users-schema.js";
import authController from "../../controllers/auth-controller.js";
import { authenticate, upload } from "../../midlewars/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchema.userSignupSchema),
  authController.signup
);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
  "/verify",
  validateBody(usersSchema.userEmailSchema),
  authController.resendVerifyEmail
);

authRouter.post(
  "/login",
  validateBody(usersSchema.userSigninSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.signout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);

export default authRouter;
