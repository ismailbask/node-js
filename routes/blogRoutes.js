const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController')


router.get('/',blogController.blog_index)

//PARAMETRE YAKALAMA
router.get('/:id',blogController.blog_content)
module.exports=router