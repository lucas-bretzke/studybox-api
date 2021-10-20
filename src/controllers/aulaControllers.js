const { Aula } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de aula

//rota para ciar aula
async function createAula(req, res, next) {
    const { titulo, descricao, data, turmaId } = req.body    

    try {
        const [aula, created] = await Aula.findOrCreate({
            where: { titulo: titulo },
            defaults: { descricao, data, turma_id: turmaId }
        });

        if (!created) {
            throw new createHttpError(409, "Aula já existe");
        }

        return res.status(201).json(aula);
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as aula
async function getAllAula(req, res, next) {
    try {
        const aulas = await Aula.findAll();

        return res.status(200).json(aulas)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma aula por id
async function getAulaById(req, res, next) {
    const aulaId = req.params.id

    try {

        const aula = await Aula.findOne({ where: { id: aulaId } })

        if (!aula) {
            throw new createHttpError(404, "Aula não encontrada");
        }

        return res.json(aula)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para aditar uma aula
async function editAula(req, res, next) {
    const aulaId = req.params.id;
    const {  descricao } = req.body

    try {

        const aula = await Aula.findOne({ where: { id: aulaId } })

        if (!aula) {
            throw new createHttpError(404, "Aula não encontrada");
        }

        aula.descricao = descricao;

        await aula.save()

        return res.status(204).end()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma aula
async function deleteAula(req, res, next) {
    const aulaId = req.params.id
    try {

        const aula = await Aula.findOne({ where: { id: aulaId } })

        if (!aula) {
            throw new createHttpError(404, "Aula não encontrada");
        }

        await aula.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createAula,
    getAllAula,
    getAulaById,
    editAula,
    deleteAula
}