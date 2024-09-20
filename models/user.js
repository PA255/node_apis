const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type : String,required: true,unique:true},
    password:{type: String,required:true},
},
{timestamps:true})

// userSchema.pre('Save',async function (next) {
//     if(!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password,10);
//     next();
// });

// userSchema.method.comparePassword = function(password) {
//     return bcrypt.compare(password, this.password)
// };

const user =mongoose.model('users',userSchema);
module.exports= user;