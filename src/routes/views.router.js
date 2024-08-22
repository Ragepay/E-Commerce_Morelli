import { Router } from "express";


const app = Router();

app.get('/products', (req, res) => {
    res.render('products', {
    });
});

app.get('/index', (req, res) => {
    res.render('index', {
    });
});

app.get('/carts/:id', (req, res) => {
    const { id } = req.params;
    //fetch
    res.render('carritos', {
        id: id
    });
});

app.get('/userAdmin/:user/:password', (req, res) => {
    const { user, password } =req.params
    if (user == "Ragepay" && password =="Benja992013"){
        res.render('userAdmin', {
    });
    } else{
        res.status(500).json({ Mensaje: 'Usuario y contraseña Incorrectos. Intente nuevamente.' });
    }
    
});

export default app;