const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
userSchema.statics.login=async function(username,password){
    const user=await this.findOne({username})//username db de var mı yok mu?
    if(user){
        const auth=await bcrypt.compare(password,user.password)//dbsede bulunan user ile giriş yapan user pass compare metodu ile eşit mi?
        if(auth){//kullanıcıyı döndür
            return user
        }
        else{
            throw Error('parola hatalı!')
        }
    }else{
        throw Error('kullanıcı yok!')
    }
}

//parolayı şifreli bir şekilde yollama
userSchema.pre('save', async function(next){//async bekleme süresi 
    const salt=await bcrypt.genSalt()//await bekleme süresei
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

const User=new mongoose.model('user',userSchema)
module.exports=User