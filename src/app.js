import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//  Routes
import productsRoute from './routes/products.router.js';
import cartsRoute from './routes/cart.router.js';
import viewsRoute from './routes/views.router.js';

dotenv.config();
const dbUser = process.env.API_USER;
const dbPassword = process.env.API_PASSWORD;
const PORT = process.env.PORT||8080;
const app = express();

//  Conectar con MongoDB Atlas base de Datos.
const enviroment = async () => {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@coderback.vqrxnc2.mongodb.net/?retryWrites=true&w=majority&appName=Coderback`,
        { dbName: 'E-commerce_Morelli' })
        .then(() => {
            console.log("Listo la base de datos")
        });
}
enviroment()

//  Handlebars.
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Middleware para parsear JSON y URLencoded.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Carpeta Satatica Public
app.use(express.static(__dirname + '/public'))

//  Routes con sus endpoints.
app.use('/api/products', productsRoute);
app.use('/api/carts', cartsRoute);
app.use('/', viewsRoute);

//  Listen HTTP
//  const httpServer = 
app.listen(PORT, () => {
    console.log(`Servidor ON, PORT: ${PORT}`);
});