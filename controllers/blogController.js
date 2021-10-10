const Blog=require('../models/blogs');
const blog_index=((req,res)=>{
    // res.render('index',{title:'Anasayfa'})
Blog.find().sort({createdAt:-1})//sıralama yapar yeni yazı üste gelir 1 ise normal sıralama
.then((result)=>{
    res.render('index',{title:'Anasayfa',blogs:result})
})
.catch((err)=>{
    console.log(err)
})
})
    const blog_content= ((req,res)=>{
        const id=req.params.id//id üzerinden gelen parametreyi yakalayalım
          // console.log(id)
        Blog.findById(id)
        .then((result)=>{
            res.render('blog',{blog:result, title:'Detay'})
        
        })
        .catch((result)=>{
            res.status(404).render('404',{title:'Sayfa bulunamadı!'})
        })
        })
    module.exports={
        blog_index,
        blog_content
    }