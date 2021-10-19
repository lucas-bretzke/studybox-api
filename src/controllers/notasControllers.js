const { Nota, Prova, User } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de notas

//rota para ciar nota
async function createNotas(req, res, next) {
    const { user_id, nota, prova_id } = req.body

    try {

        // const prova = await Nota.findAll({where: {prova_id: prova_id}})
        // const user = await Nota.findAll({where: {user_id: user_id}})

        

        const notas = await Nota.create({ user_id, nota: nota, prova_id })

        return res.status(201).json(notas)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as nota
async function getAllNotas(req, res, next) {
    try {

        const notas = await Nota.findAll();

        return res.status(200).json(notas)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma nota por id
async function getNotasByProvaId(req, res, next) {
    const id = req.params.id

    try {

        const provas = await Nota.findAll({ where: { prova_id: id }})

        if (!provas) {
            throw new createHttpError(404, "Nota não encontrada");
        }

        return res.status(200).json(provas)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getNotasByUserId(req, res, next) {
    const id = req.params.id

    try {

        const users = await Nota.findAll({ where: { user_id: id }})

        if (!users) {
            throw new createHttpError(404, "Nota não encontrada");
        }

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para editar nota
async function editNotas(req, res, next) {
    const { nota, prova_id, user_id } = req.body

    try {

        const notas = await Nota.findOne({ where: { prova_id: prova_id } && { user_id: user_id } })

        if (!notas) {
            throw new createHttpError(404, "Nota não encontrada");
        }

        Object.assign(notas, { nota })

        await notas.save()

        return res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma nota
async function deleteNotas(req, res, next) {
    const { user_id, prova_id } = req.body
   
    try {

        const nota = await Nota.findOne({ where: { user_id: user_id } && { prova_id: prova_id } })

        if (!nota) {
            throw new createHttpError(404, "Nota não encontrada");
        } 

        await nota.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createNotas,
    getAllNotas,
    getNotasByProvaId,
    getNotasByUserId,
    editNotas,
    deleteNotas
}