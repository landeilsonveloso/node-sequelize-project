const validateUser = (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    if (nome === undefined && idade === undefined) {
        res.status(400).json({msg: "O campo nome e idade são obriagatórios"})
    }

    else if (nome === "" && idade === "") {
        res.status(400).json({msg: "O campo nome e idade estão vazios!"})
    }

    if (nome === undefined) {
        res.status(400).json({msg: "O campo nome é obriagatório"})
    }

    else if (nome === "") {
        res.status(400).json({msg: "O campo nome está vazio!"})
    }

    if (idade === undefined) {
        res.status(400).json({msg: "O campo idade é obriagatório"})
    }

    else if (idade === "") {
        res.status(400).json({msg: "O campo idade está vazio!"})
    }
}

export default validateUser
