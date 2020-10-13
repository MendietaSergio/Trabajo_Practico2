var express = require('express');
var router = express.Router();

let moviesController = require("../controllers/moviesController")

router.get('/', moviesController.listar);

router.get('/new',moviesController.new);
router.get('/recommended',moviesController.recommended);
router.post('/search',moviesController.search);

router.get('/detail/:id',moviesController.detalle);
router.get('/edit/:id',moviesController.edit);
router.put('/edit/:id',moviesController.update);
router.get('/add',moviesController.add);
router.post('/add',moviesController.create)
router.delete('/delete/:id', moviesController.delete)
module.exports = router;
