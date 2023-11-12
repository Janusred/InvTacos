import {Request, Response} from 'express';
import pool from '../database';

class ProductoController{

   public list(req: Request, res: Response){
        
        res.json({text:'listando productos'});
    }
    public getOne(req:Request,res:Response){
        res.json({text:'Este producto es '+req.params.id});
    }

    public async create(req:Request, res:Response): Promise<void>{
      await  pool.query('INSERT INTO producto set ?',[req.body]);
       res.json({message:'Guardando producto '})

    }
    public delete(req:Request, res:Response){
        res.json({text:'eliminando producto '+req.params.id});
    }
    public update (req:Request,res:Response){
        res.json({text:'actualizado ' + req.params.id});
    }
}

 const productoController = new ProductoController();
 export default productoController;
