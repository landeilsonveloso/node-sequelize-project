import { create, destroy, findAll, findByPk, update } from "../controllers/users.js"
import { Router } from "express"

const userRouter = Router()

userRouter.post("/", async (req, res) => {
    try {
        const {name, email} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (!email) {
            return res.status(400).send("Campo email obrigatório!")
        }

        await create({name, email})

        res.status(201).send("Usuário criado com sucesso!")      
    }

    catch (err) {
        res.status(500).send(err.message)
    }
})

userRouter.get("/", async (_, res) => {
    try {
        const users = await findAll()

        res.status(200).send(users)
    }
    
    catch (err) {
        res.status(500).send(err.message)
    }
})

userRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id

        const user = await findByPk(id)

        res.status(200).send(user)
    }
    
    catch (err) {
        res.status(500).send(err.message)
    }
})

userRouter.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const {name, email} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (!email) {
            return res.status(400).send("Campo email obrigatório!")
        }

        await update(id, {name, email})

        res.status(200).send("Usuário atualizado com sucesso!")
    }

    catch (err) {
        res.status(500).send(err.message)
    }
})

userRouter.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Usuário excluido com sucesso!")
    }

    catch (err) {
        res.status(500).send(err.message)
    }
})

export default userRouter
