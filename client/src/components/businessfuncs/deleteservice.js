let deleteservice=async(setInput,getFun,id)=>{
    try{
        let res=await fetch(`http://localhost:2025/products/${id}`,{
          method:'DELETE'
        })
        let data =await res.json()
        setInput(data)
        getFun()
       }
       catch(err){
        console.log(err,'somthing is error daata not deleted')
       }
}
export default deleteservice