import User from "../models/users.js"

export const create = async (req, res) => {
    const {name, age} = req.body

    try {
        if (!name) {
            res.status(400).json({message: "Campo name obrigatório!"})
        }

        else if (!age) {
            res.status(400).json({message: "Campo age obrigatório!"})
        }

        await User.create({name: name, age: age})

        return res.status(201).send("Usuário criado com sucesso!")

    } catch (err) {
        res.status(500).send(err)
    }
}

export const findAll = async (_, res) => {
    try {
        const users = await User.findAll({attributes: ["id", "name", "age"]})

        return res.status(200).send(users)
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const findOne = async (req, res) => {
    const id = req.params.id
    
    try {
        const user = await User.findOne({attributes: ["id", "name", "age"]}, {where: {id: id}})

        return res.status(200).send(user)
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const update = async (req, res) => {
    const id = req.params.id
    const {name, age} = req.body

    try {
        await User.update({name: name, age: age}, {where: {id: id}})

        return res.status(200).send("Usuário atualizado com sucesso!")
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const destroy = async (req, res) => {
    const id = req.params.id

    try {
        await User.destroy({where: {id: id}})

        return res.status(200).send("Usuário excluido com sucesso!")
        
    } catch (err) {
        res.status(500).send(err)
    }
}
