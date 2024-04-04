import { create, destroy, findAll, findOne, update } from "../controllers/users.js"
import { Router } from "express"

const userRouter = Router()

userRouter.post("/create", create)
userRouter.get("/findAll", findAll)
userRouter.get("/findOne", findOne)
userRouter.put("/update/:id", update)
userRouter.delete("/destroy/:id", destroy)

export default userRouter
