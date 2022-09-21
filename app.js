const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.set('view engine', 'pug');
app.set('views', './views');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));




//route işlemleri yapılıyor
app.use('/admin',adminRoutes);
app.use(userRoutes);


app.use((req,res)=>{
    res.status(404).render('404');
}
);





app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});
