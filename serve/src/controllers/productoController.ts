import {Request, Response} from 'express';
import pool from '../database';

class ProductoController{

   public  async coca(req: Request, res: Response){
  //const {id} = req.params;
        const coca = await pool.query('SELECT * FROM Coca_lata');
        res.json(coca);

    }

    public  async fresca(req: Request, res: Response){
        //const {id} = req.params;
              const fresca = await pool.query('SELECT * FROM Fanta_lata');
              res.json(fresca);
          }

        
        
        public  async sumafresca(req: Request, res: Response){
            //const {id} = req.params;
                  const sumafresca = await pool.query('  SELECT   id,nombre, refri_inicio,completo_inicio,created_at,(COALESCE(refri_inicio, 0) + COALESCE(completo_inicio, 0)) AS suma_total FROM Fresca_lata');
                  res.json(sumafresca);
              }
}

 const productoController = new ProductoController();
 export default productoController;
