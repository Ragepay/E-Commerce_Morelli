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

export default app;