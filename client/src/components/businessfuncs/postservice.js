let postservice=async(setInput,input,getFun)=>{
    try {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('price', input.price);
        formData.append('model', input.model);
        formData.append('color', input.color);
    
        // Append file only if it exists
        const fileInput = document.querySelector('input[name="image_url"]');
        if (fileInput && fileInput.files[0]) {
          formData.append('image_url', fileInput.files[0]); // The key must match the server-side multer key
        }
      
        const res = await fetch('http://localhost:2025/products', {
          method: 'POST',
          body: formData,
        });
    
        if (res.ok) {
          console.log('Product added successfully');
          getFun(); // Refresh product list
          setInput({ name: '', price: '', model: '', color: '', image_url: '' });
        } else {
          console.error('Error adding product:', res.statusText);
        }
      } catch (err) {
        console.error('Error posting product:', err);
      }
}

export default postservice