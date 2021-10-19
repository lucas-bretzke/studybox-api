const { Materia } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de matéria

//rota para ciar matéria
async function createMateria(req, res, next) {
    const { titulo, descricao, turma_id } = req.body

    try {
        const [materia, created] = await Materia.findOrCreate({
            where: { titulo: titulo },
            defaults: { descricao, turma_id }
        }); 

        if (!created) {
            throw new createHttpError(409, "Materia já criada");
        }

        return res.status(201).json(materia)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as matérias
async function getAllMateria(req, res, next) {
    try {

        const materias = await Materia.findAll();

        return res.status(200).json(materias)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma matéria por id
async function getMateriaById(req, res, next) {
    const meteriaId = req.params.id

    try {

        const materia = await Materia.findOne({ where: { id: meteriaId } })

        if (!materia) {
            throw new createHttpError(404, "Matéria não encontrada");
        }

        return res.status(200).json(materia)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para aditar uma matéria
async function editMateria(req, res, next) {
    const meteriaId = req.params.id;
    const { titulo, descricao } = req.body

    try {

        const materia = await Materia.findOne({ where: { id: meteriaId } })

        if (!materia) {
            throw new createHttpError(404, "Matéria não encontrada");
        }

        Object.assign(materia, { titulo, descricao })

        await materia.save()

        return res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma matéria
async function deleteMateria(req, res, next) {
    const materiaId = req.params.id
    try {

        const materia = await Materia.findOne({ where: { id: materiaId } })

        if (!materia) {
            throw new createHttpError(404, "Matéria não encontrada");
        }

        await materia.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createMateria,
    getAllMateria,
    getMateriaById,
    editMateria,
    deleteMateria
}
