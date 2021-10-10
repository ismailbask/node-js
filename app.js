const express=require('express');
const app=express();
const morgan=require('morgan')
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')
const adminRoutes=require('./routes/adminRoutes')
const blogRoutes=require('./routes/blogRoutes')
const authRoutes=require('./routes/authRoutes')
const {requireAuth,checkUser}=require('./middlewares/authMiddleware')
const dbURL='mongodb+srv://ismail:1234@nodeblog.rdahm.mongodb.net/node-blog?retryWrites=true&w=majority'//bağlantı için link
mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>app.listen(3000))//result dbden gelen içerik
.catch((err)=>console.log(err))

app.set('view engine','ejs')

app.use(express.static('public'))
//İNPUTTAN GELEN İÇERİKLERİ ALMA
app.use(express.urlencoded({extended:true}))//true iç içe nesne gönderimi
app.use(morgan('dev'))
app.use(cookieParser())

app.get('*',checkUser)
app.get('/', (req,res)=>{
    res.redirect('/blog')
})
app.use('/',authRoutes)
app.use('/blog',blogRoutes)
app.use('/admin',requireAuth,adminRoutes)

app.get('/about',(req,res)=>{
    res.render('about',{title:'Hakkımızda'})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa bulunamadı'})

})