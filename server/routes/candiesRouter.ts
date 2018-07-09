import {Candy} from "../models/Candy";
import * as express from 'express';
export const candiesRouter = express.Router();

candiesRouter.get('/',(req:express.Request,res:express.Response)=>{
    Candy.find()
        .then((candies:any)=>{
            res.json(candies);
        })
        .catch((err:Error)=>{
            res.status(500).send(err);
        });
});

candiesRouter.get('/:candyName',(req:express.Request,res:express.Response)=>{
    Candy.findOne({candyName:req.params.candyName})
        .then((candy:any)=>{
            res.json(candy);
        })
        .catch((err:Error)=>{
            res.status(500).send(err);
        });
});

candiesRouter.post('/',(req:express.Request,res:express.Response)=>{
    const candy = new Candy(req.body);
    candy.save()
        .then(()=>{
            res.json(candy);
        })
        .catch((err:Error)=>{
            res.status(500).send(err);
        });
});

candiesRouter.patch('/:candyName',(req:express.Request,res:express.Response)=>{
    Candy.findOne({candyName:req.params.candyName})
        .then((candy:any)=>{
            candy.countInStock--;
            candy.save()
                .then(()=>{
                    res.json(candy);
                })
        })
        .catch((err:Error)=>{
            res.status(500).send(err);
        });
});

candiesRouter.delete('/:candyName',(req:express.Request,res:express.Response)=>{
    Candy.deleteOne({ candyName: req.params.candyName})
        .then((data:any)=>{
            res.json(data._doc);
        });
});