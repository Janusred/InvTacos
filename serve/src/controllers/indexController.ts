import {Request,Response} from 'express';

class IndexController{
    index(req: Request, res: Response){
        res.json({text:'APi esta en /api/producto'});
    }
}

export const indexController = new IndexController();
