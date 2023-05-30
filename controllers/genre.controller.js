const Genre = require("../models/genre.model")

module.exports.genreController = {
    addGenre : async(req, res) => {
        const {name} = req.body
        const addJanre = await Genre.create({
            name
        })
        res.json(`ADD ${addJanre.name}`)
    },
    deleteGenre : async(req , res) => {
        const deleteJanre = await Genre.deleteOne({name : req.body.name});
        res.json(`жанр ${deleteJanre} удален `)
    },
    showAllGenre : async (req, res) => {
        const showAllJanre = await Genre.find({})
        res.json(showAllJanre)
    },
    updateGenre : async (req, res) => {
        const updateGenre = await Genre.findByIdAndUpdate(req.params.id,({name : req.body.name}))
        res.json(updateGenre)
    }
}