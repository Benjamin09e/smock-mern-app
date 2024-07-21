import React, { useState } from 'react'
import { publicRequest } from "../requestMethods";

const AddProduct = ({setShowModal, setProducts}) => {

    const [newProduct, setNewProduct] = useState({
        title: "",
        image: "",
        unityPrice: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = async () => {
        try {
            const res = await publicRequest.post(`products`, newProduct);
            const response = await publicRequest.get(`products`);
            setProducts(response.data)
            setShowModal(false)
        } catch (error) {
            console.error(error);
        }
        // Close the modal
        setShowModal(false);
    };


    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                    &times;
                </span>
                <h2>Add Product</h2>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Product Name"
                    value={newProduct.title}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="unityPrice"
                    placeholder="Unity Price"
                    value={newProduct.unityPrice}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddProduct} >Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct