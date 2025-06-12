import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },   
}, {
    timestamps: true     //automatycznie dodaje dwa pola do schematu: 
                        // createdAt – kiedy dokument został utworzony
                        //updatedAt – kiedy dokument był ostatnio zmieniony
});

const Product = mongoose.model('Prosuct', productSchema);
export default Product;