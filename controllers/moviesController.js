
const { Sequelize } = require("../database/models");
const db = require("../database/models");
const sequelize = db.sequelize;
const Op = Sequelize.Op;

module.exports ={
    listar: (req,res)=>{
        /*MUESTRO LA LISTA DE PELICULAS CON LA FUNCION findAll */
        db.Peliculas.findAll()
        .then(function(peliculas) {
            res.render('listadoDePeliculas',{
                peliculas:peliculas
            })
        })
        // .catch(error => {    
        //      res.send(error)
        // })
    },
    detalle: (req,res) =>{
        /*findByPk recibe por parametro el id selecionado y lo usa */
        db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
                res.render("detallePelicula",{
                    pelicula:pelicula
                })
            })
            .catch(error => {    
                res.send(error)
           })
    },
    new:(req,res)=>{
        /*MUESTRO TODAS LAS PELICULAS */
        db.Peliculas.findAll({
            /*ORDENADAS POR FECHA DE LANZAMIENTO, MENOR AL MAYOR */
            order:[
            ["release_date","DESC"]
        ]
        })
            .then(function(peliculas){
                res.render("new",
                {peliculas:peliculas})
            })
    },
    recommended:(req,res)=>{
        db.Peliculas.findAll({
            where:{
                awards : {[db.Sequelize.Op.gt] : 8}
            },
            order: [
                ["awards","ASC"]
            ]
        })
        .then(function(peliculas){
            res.render("recommended", {
                peliculas: peliculas
            })
        })
    },
    search:(req,res)=>{
        let buscador = req.query.search
        db.Peliculas.findAll({
            where:{
                title: {[Op.like]: `%${buscador}%`}
            }
        })
        .then(function(peliculas){
            res.render("search",{
                peliculas: peliculas
            })
        })
    },
    edit: (req,res) =>{
        db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
                res.render("editarPelicula",{
                    pelicula: pelicula
                })
            })
    },
    update: (req,res) =>{
        db.Peliculas.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(pelicula){
            res.redirect("/movies/detail/"+req.params.id)
        })
        
    },
    add: (req,res)=>{
        res.render('crearPelicula')
    },
    create: (req,res) =>{
        db.Peliculas.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
        .then(function(pelicula){
            res.redirect("/movies")
        })
    },
    delete: (req,res) =>{
        db.Peliculas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(pelicula){
            res.redirect("/movies")
        })
    }
}