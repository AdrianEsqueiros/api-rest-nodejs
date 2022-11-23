import express from "express";
import morgan from "morgan";
const multer = require("multer");
var cors = require('cors')
const bodyparser = require('body-parser')

const storage  = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb){
        cb("",Date.now()+ file.originalname)
    }
})

// Routes
import productsRoutes from "./routes/product.routes";

const app = express();

// Settings
app.set("port", 5000);

app.use(express.json());
app.use(cors())
app.use(express.static('public'))

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json({type:'aplication/json'}));

// Middlewares
app.use(morgan("dev"));

// Routes
app.use("/api/products", productsRoutes);
const upload = multer ({
    storage: storage
})
app.get("/index",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})
app.post("/files",upload.single('avatar'),(req,res)=>{
    res.send(__dirname  );
})

export default app;
