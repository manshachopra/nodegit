const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://manshachopra:mansha2004@mansha.lm6rdhb.mongodb.net/',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log("mongodb connected")
// });


mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://manshachopra:mansha2004@mansha.lm6rdhb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log("Connection errr: ", err);
})