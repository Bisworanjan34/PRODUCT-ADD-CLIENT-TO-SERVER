let getservice=async(setProduct)=>{
    try {
        const res = await fetch('http://localhost:2025/products');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
}

export default getservice