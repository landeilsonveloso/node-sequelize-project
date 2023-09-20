import app from "./src/app.js"
import db from "./src/config/db.js"

const PORT = process.env.PORT

db.sync();

app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))
