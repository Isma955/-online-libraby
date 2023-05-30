const Router = require('express');

const { booksController } = require('../controllers/book.controller')

const router = Router()

router.get('/book',booksController.allBook)
router.post('/book',booksController.addBook)
router.patch('/admin/book/:id',booksController.updateBook)
router.patch('/admin/book/confiscate/:id',booksController.confiscateBook)
router.patch('/admin/book/return/:id',booksController.returnBook)
router.patch('/admin/book/rent/:id',booksController.rentBook)
router.delete('/admin/book/:id',booksController.deleteBook)

module.exports = router