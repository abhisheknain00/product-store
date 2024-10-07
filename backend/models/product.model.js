import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {
    timestamps: true //createdAt, UpdatedAt fields
});

const Product = mongoose.model('Product', productSchema);
//products in mongoose

export default Product;