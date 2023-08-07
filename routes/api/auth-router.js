import express from "express";
import { validateBody } from "../../decorators/index.js";
import usersSchema from "../../schemas/users-schema.js";
import authController from "../../controllers/auth-controller.js";
import { authenticate, upload, resizeAvatar } from "../../midlewars/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchema.userSignupSchema),
  authController.signup
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
  resizeAvatar,
  upload.single("avatar"),
  authController.updateAvatar
);

export default authRouter;
