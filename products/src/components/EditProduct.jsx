import React, { useState } from 'react';
import { publicRequest } from "../requestMethods";

const EditProduct = ({ setShowEditModal, setProducts, Data }) => {

    const [editProduct, setEditProduct] = useState(Data);

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditProduct({ ...editProduct, [name]: value });
    };

    const handleEditProduct = async () => {
        try {
            const res = await publicRequest.put(`products/${editProduct._id}`, editProduct);  // Utiliser l'ID du produit
            const response = await publicRequest.get(`products`);
            setProducts(response.data);
            setShowEditModal(false);
        } catch (error) {
            console.error(error);
        }
        console.log(editProduct);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowEditModal(false)}>
                    &times;
                </span>
                <h2>Edit Product</h2>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={editProduct.image}
                    onChange={handleEditInputChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Product Name"
                    value={editProduct.title}
                    onChange={handleEditInputChange}
                />
                <input
                    type="number"
                    name="unityPrice"
                    placeholder="Unity Price"
                    value={editProduct.unityPrice}
                    onChange={handleEditInputChange}
                />
                <button onClick={handleEditProduct}>Edit Product</button>
            </div>
        </div>
    );
};

export default EditProduct;
