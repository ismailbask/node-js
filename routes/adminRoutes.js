const express=require('express');
const router=express.Router()//artık app yerine router kullanıyoruz
const adminController=require('../controllers/adminController')
//yazı oluşturma silme
router.get('/',adminController.admin_index)
//ADMİN PANELİ İLE YENİ YAZI EKLENMESİ İÇİN ADD DOSYASI
router.get('/add',adminController.admin_add)
//İNPUT İÇERİSİNDEKİ VERİLERİ ALMA
router.post('/add',adminController.admin_add_post)
//silme işlemi
router.delete('/delete/:id',adminController.admin_delete)
module.exports=router