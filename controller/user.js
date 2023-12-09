
const user = require('../schema/user.schema');
require('../db');

// const newUser = new user({
//     name: 'John Doe',
//     age: 25,
//     track: 'Node.js',
// })

// newUser.save();

// user.create({
//     name: 'Jane Doe',
//     age: 22,
//     track: 'python',
// });

// const findOneUser =async ()=>{
//     const oneUser = await user.findOne({name: 'John Doe'});
    
//     console.log(oneUser);
// }
const findUserId =async ()=>{
    const oneUser = await user.findById('657206e3af5b97f56c3b8d7a').exec().then((data)=>{
        console.log(data);
    })
    console.log(oneUser);
}

// findOneUser();
// const findUser = async ()=>{
//     const users = await user.find();
//     console.log(users);
// }
// findUser();

//update doc

// user.updateOne({name: 'John Doe'}, {name: 'jack', age:30, track: 'frontend'}, {returnOriginal: false})
// user.findByIdAndUpdate('657206e3af5b97f56c3b8d7a', {name: 'jack', age:30, track: 'frontend'}, {returnOriginal: false})

user.aggregate([    
   { $group:{
        _id: '$age',
        count: {$sum: 1}
    }}
]).exec().then(data=>{
    console.log(data);
})
// user.aggregate().groupBy({
//     _id: '$age'
// })

//delete user
// user.deleteOne({name: 'jack'});