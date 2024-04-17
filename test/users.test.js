import app from "../src/app.js"
import database from "../src/config/database.js"
import request from "supertest"
import User from "../src/models/users.js"

const newUser = {
  name: "User Test",
  email: "usertest@gmail.com"
}

const user = {
  name: "User",
  email: "usertest@gmail.com"
}

async function findNewUserId() {
  const userTest = await User.findOne({where: {email: "usertest@gmail.com"}})
  return userTest.id
}

beforeAll(async () => {
  await database.sync({force: true})
})

afterAll(async () => {
  await database.close()
})

describe("Teste das rotas de usuários", () => {
  test("Rota de criar", async () => {
    const res = await request(app).post(`/users`).send(newUser)
    expect(res.statusCode).toBe(201)
  })

  test("Rota de buscar todos", async () => {
    const res = await request(app).get(`/users`)
    expect(res.statusCode).toBe(200)
  })

  test("Rota de buscar um", async () => {
    const id = await findNewUserId()
    const res = await request(app).get(`/users/${id}`)
    expect(res.statusCode).toBe(200)
  })

  test("Rota de atualizar", async () => {
    const id = await findNewUserId()
    const res = await request(app).put(`/users/${id}`).send(user)
    expect(res.statusCode).toBe(200)
  })

  test("Rota de excluir", async () => {
    const id = await findNewUserId()
    const res = await request(app).delete(`/users/${id}`)
    expect(res.statusCode).toBe(200)
  })
})
