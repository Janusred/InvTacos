import { Router } from 'express';
import productoController from '../controllers/productoController';

class ProductoRoutes{
    public router : Router= Router();
    /**
     *
     */
    constructor() {
        this.config();
    }
    config():void{
        this.router.get('/fr',productoController.fresca);
        this.router.get('/co',productoController.coca);
        this.router.get('/sf',productoController.sumafresca);
        this.router.get('/sct',productoController.sct);
    }
}


const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;