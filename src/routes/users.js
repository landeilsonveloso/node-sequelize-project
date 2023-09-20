import { Router } from "express";
import users from "../controllers/users.js";

const userRouter = Router()

userRouter.get("/", users.getUsers);
userRouter.post("/", users.createUser)
userRouter.put("/:id", users.updateUser)
userRouter.delete("/:id", users.deleteUser)

export default userRouter
