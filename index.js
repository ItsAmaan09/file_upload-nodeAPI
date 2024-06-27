const express = require('express');
const multer = require('multer');
const upload = multer({dest:'uploads/'});

const app = express();
app.use(express.urlencoded({extended:false}));
app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
    if(!req.file) return res.status(400).json({error:'No file uploaded'});

    const fileInformation = {
        name:req.file.originalname,
        type:req.file.mimetype,
        size:req.file.size
    };

    res.json(fileInformation);
});

app.listen(3001,()=>{
    console.log('server running');
});