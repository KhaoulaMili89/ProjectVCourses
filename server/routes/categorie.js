
const express = require('express')
const router = express.Router();
const{}=require('../controllers/categorie');


router.post('/newCategory',addCategory)
router.get('/category',getCategory)

