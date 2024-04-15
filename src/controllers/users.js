import User from "../models/users.js"

export const create = async (user) => {
    try {
        const registeredUser = await User.findOne({where: {name: user.name}})

        if (registeredUser) {
            throw new Error("Usuário já cadastrado!")
        }

        await User.create(user)

    } catch (err) {
        throw new Error(err)
    }
}

export const findAll = async () => {
    try {
        return await User.findAll({attributes: ["id", "name", "email"]})

    } catch (err) {
        throw new Error(err.message)
    }
}

export const findByPk = async (id) => {
    try {
        return await User.findByPk(id, {attributes: ["id", "name", "email"]})

    } catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, user) => {
    try {
        const registeredUser = await User.findOne({where: {name: user.name}})

        if (registeredUser && registeredUser.id !== id) {
            throw new Error("Usuário já cadastrado!")
        }

        await User.update({name: user.name, email: user.email}, {where: {id: id}})

    } catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await User.destroy({where: {id: id}})

    } catch (err) {
        throw new Error(err.message)
    }
}