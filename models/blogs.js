const mongoose=require('mongoose');
const Schema = mongoose.Schema//şema oluşturuyoruz
const blogSchema=new Schema({
    title:{
        type:String,
        require:true//zorunlu
    },
    short:{
        type:String,
        require:true
    },
    long:{
        type:String,
        require:true
    }

},{timestamps:true})//timestamps:true veri eklendiğinde  mongodbye hangi zamanda girildiğini ekler

const Blog=mongoose.model('Blog',blogSchema)//çıktı almak için model kullanıyoruz. Blog ismiyle şemaya ulaşıyoruz
module.exports=Blog//çıktı