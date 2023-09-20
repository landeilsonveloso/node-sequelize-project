import app from "./src/app.js"
import db from "./src/config/db.js"

const port = process.env.MYSQL_PORT

db.sync();

app.listen(port, () => console.log(`Servidor iniciado na porta http://localhost:${port}`));
