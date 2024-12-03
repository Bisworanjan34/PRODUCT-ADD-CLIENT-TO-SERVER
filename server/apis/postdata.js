const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage });

const postfun = (app, dbname, colname, mongocl) => {
  app.post('/products', upload.single('image_url'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'File upload failed. Ensure the "image_url" field is used for the file.' });
      }

      const db = mongocl.db(dbname);
      const col = db.collection(colname);

      console.log('File uploaded:', req.file); // Log file details for debugging

      const product = {
        ...req.body,
        image_url: `http://localhost:2025/uploads/${req.file.filename}`, // Full image URL
      };

      const data = await col.insertOne(product);
      res.json(data);
    } catch (err) {
      console.error('Error saving product:', err);
      res.status(500).json({ error: 'Failed to save product.' });
    }
  });
};

module.exports = { postfun };
