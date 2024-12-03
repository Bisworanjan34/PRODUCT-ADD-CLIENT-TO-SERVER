import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import postservice from "./businessfuncs/postservice";
import getservice from "./businessfuncs/getproducts";
import deleteservice from "./businessfuncs/deleteservice";
function Products() {
  let imgref=useRef()
    let [product,setProduct]=useState([])
  let [input, setInput] = useState({
    name: '',
    price: '',
    model: '',
    color: '',
    image_url: ''
  });
//   let [show, setShow] = useState({});
//<input type='file' alt='image' ></input>
const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        imgref.current.src=reader.result
        setInput((prev) => ({ ...prev, image_url: reader.result }));
         // Save Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  // const getFun = async () => {
  //   try {
  //     const res = await fetch('http://localhost:2025/products');
  //     const data = await res.json();
  //     setProduct(data);
  //   } catch (err) {
  //     console.error('Error fetching products:', err);
  //   }
  // };
  const getFun=()=>{
    getservice(setProduct)
  }

  // const postfun = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('name', input.name);
  //     formData.append('price', input.price);
  //     formData.append('model', input.model);
  //     formData.append('color', input.color);
  
  //     // Append file only if it exists
  //     const fileInput = document.querySelector('input[name="image_url"]');
  //     if (fileInput && fileInput.files[0]) {
  //       formData.append('image_url', fileInput.files[0]); // The key must match the server-side multer key
  //     }
    
  //     const res = await fetch('http://localhost:2025/products', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     if (res.ok) {
  //       console.log('Product added successfully');
  //       getFun(); // Refresh product list
  //       setInput({ name: '', price: '', model: '', color: '', image_url: '' });
  //     } else {
  //       console.error('Error adding product:', res.statusText);
  //     }
  //   } catch (err) {
  //     console.error('Error posting product:', err);
  //   }
  // };
  const postfun=()=>{
    postservice(setInput,input,getFun)
  }
  // let deletefun=async(id)=>{
  //  try{
  //   let res=await fetch(`http://localhost:2025/products/${id}`,{
  //     method:'DELETE'
  //   })
  //   let data =await res.json()
  //   setInput(data)
  //   getFun()
  //  }
  //  catch(err){
  //   console.log(err,'somthing is error daata not deleted')
  //  }
  // }
  let deletefun=(id)=>{
    deleteservice(setInput,getFun,id)
  }
  return (
    <div >
      <div className=" pt-3 py-4 bg-slate-300 div items-center flex flex-col">
      <input
        type="text"
        placeholder="Enter product name"
        name="name"
        onChange={handleChange}
        value={input.name}
      /><br />
      <input
        type="number"
        placeholder="Enter product price"
        name="price"
        onChange={handleChange}
        value={input.price}
      /><br />
      <input
        type="text"
        placeholder="Enter product model"
        name="model"
        onChange={handleChange}
        value={input.model}
      /><br />
      <input
        type="text"
        placeholder="Enter product color"
        name="color"
        onChange={handleChange}
        value={input.color}
      /><br />
      <input
        type="file"
        placeholder="Choose image"
        name="image_url"
        accept="image/*"
        onChange={handleFileChange}
      /><br />
      <img src="" alt="" ref={imgref} className="mb-3 h-[50px] w-[200px] object-contain"/>
    <div className="button">
      <button onClick={getFun} className="h-[38px] w-[100px] bg-blue-700 text-white border-0 rounded-md ms-5 me-4 transition-all active:scale-90">
        Get Data
      </button>
      <button className="h-[38px] w-[100px] bg-green-700 text-white border-0 
      rounded-md transition-all active:scale-90 " onClick={postfun}>post-DatA</button>
    </div>
      </div>


      <div className="mt-4 flex gap-[23px] flex-wrap justify-center">
        {
            product.length >0 && product.map((item,index)=>{
              
                return(
                    <div className="div gap-[20px]" key={index}>
                      <Link to={`/products/productDetails/${item._id}`}>
                        <img src={item.image_url} alt="" className="size-[80px]"/>
                      </Link>

                        <p className="text-[13px]">{item.name}</p>
                        <p className="text-[13px]">{item.price}</p>
                        <p className="text-[13px]">{item.model}</p>
                        <p className="text-[13px]">{item.colr}</p>
                        <button onClick={()=>deletefun(item._id)} className="h-[38px] w-[100px] bg-red-500 active:bg-red-700 text-white border-0 rounded-md" >DeletE</button>
                    </div>
                ) 
                
            })
        }
      </div>
    </div>
  );
}

export default Products;
