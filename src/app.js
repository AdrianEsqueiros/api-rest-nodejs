import express from "express";
import morgan from "morgan";
var cors = require('cors')
const bodyparser = require('body-parser')

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



export default app;
