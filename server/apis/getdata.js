let {ObjectId}=require('mongodb')

let getfun=(app,dbname,colname,mongocl)=>{
    app.get('/products',async(req,res)=>{
       try{
        let db=mongocl.db(dbname)
        let col=db.collection(colname)
        let data=await col.find().toArray()
        res.json(data)
       }
       catch(err){
        console.error('somthing is error',err)
       }
    })

    
}
let  moreinfo=(app,dbname,colname,mongocl)=>{
    app.get('/products/productDetails/:id',async(req,res)=>{
      try{
        let db=mongocl.db(dbname)
        let col=db.collection(colname)
        let id=req.params.id
        let data=await col.findOne({_id:new ObjectId(id)})
        res.json(data)
      }
      catch(err){
        console.log('error data not find',err)
      }
    })
}

module.exports={getfun,moreinfo}

