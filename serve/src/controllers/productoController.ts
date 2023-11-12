import {Request, Response} from 'express';
import pool from '../database';

class ProductoController{

   public  async list(req: Request, res: Response){
  //const {id} = req.params;
        const producto = await pool.query('SELECT * FROM Indio');
        
        
        res.json(producto);

    }


    public  async getOne(req:Request,res:Response){
        //res.json({text:'Este producto es '+req.params.id});
        const {id} = req.params;
        const producto = await pool.query('SELECT * FROM Indio WHERE id = ?',[id]);
        if(producto.lenth > 0 ){
            return res.json(producto[0]);
        }
        res.status(404).json({text:'no existe'});
    }
    

    public async create(req:Request, res:Response): Promise<void>{
      await  pool.query('INSERT INTO Indio set ?',[req.body]);
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
