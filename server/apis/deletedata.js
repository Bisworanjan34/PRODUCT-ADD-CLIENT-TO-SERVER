 let {ObjectId}=require('mongodb')
let deletefun=(app,dbname,colname,mongocl)=>{
    app.delete('/products/:id',async(req,res)=>{
        try{
            let db=mongocl.db(dbname)
        let col=db.collection(colname)
        let id=req.params.id
        let result=await col.deleteOne({_id:new ObjectId(id)})
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No document found with the given ID' });
        }

        res.json({ message: 'Document deleted successfully', result });
        }
        catch(err){
            console.log('somthing is error',err)
        }
    })
}

module.exports={deletefun}