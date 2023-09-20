import User from "../models/users.js";

const getUsers = async (_, res) => {
    await User.findAll({attributes: ["id", "nome", "idade"]}).then((result) => res.json(result))
}

const createUser = async (req, res) => {
    const {nome, idade} = req.body

    await User.create({nome: nome, idade: idade}).then((result) => res.json(result))
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const {nome, idade} = req.body

    await User.update({nome: nome, idade: idade}, {where: {id: id}})
    await User.findByPk(id).then((result) => res.json(result))
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    await User.destroy({where: {id: id}})
    await User.findAll({attributes: ["id", "nome", "idade"]}).then((result) => res.json(result))
}

export default {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
