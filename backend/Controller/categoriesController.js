const Category = require('../models/category');
const Product=require("../models/product");
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../utils/cloudinary')

exports.getCategories = async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false });
    }
    res.status(200).send(categoryList);
};

exports.getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(500).json({
            message: 'The category with the given ID was not found.',
        });
    }
    res.status(200).send(category);
};

exports.deleteCategory =async (req, res) => {
    try{
        
        
        await Product.deleteMany({ category: req.params.id });
        await Category.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success: true,
            message: 'the category is deleted!',
        });
    }catch(error){
        res.status(400).json({success:false,message:error.message})
    }
};

exports.addCategory = async (req, res) => {
   
    try{
        const imagePath = path.join(__dirname, `../images/${req.file.filename}`)
        const result = await cloudinaryUploadImage(imagePath)
        
        const cat = new Category({
            name: req.body.name,
            
            image: {
                url: result.secure_url,
                publicId: result.public_id
            },
        })
        await Category.create(cat)
      fs.unlinkSync(imagePath)
        res.status(201).json({ message: 'Post added successfully' })
    }catch(err){
    res.status(400).json({
        message:"fail",
        error: err.message
    })
    }
    };