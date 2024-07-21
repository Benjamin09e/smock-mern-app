import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { publicRequest } from "../requestMethods";
import { AiFillPlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

const Items = () => {

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [receivedata, setReceiveData] = useState("");

    const [products, setProducts] = useState([]);

    const [activeProduct, setActiveProduct] = useState("");

    const [totalPendingOrders, setTotalPendingOrders] = useState({});

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`products`);
                setProducts(res.data);
                setActiveProduct(res.data[0]);
                setTotalPendingOrders({
                    count: res.data.length,
                    title: "All Products"
                })
            } catch (err) { }
        };
        getProducts();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);
    const [filterName, setFilterName] = useState("");

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = products
        ?.filter((item) =>
            item.title.toLowerCase().includes(filterName.toLowerCase())
        )
        .slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        return (
            <li
                key={number}
                className={currentPage === number ? "active" : ""}
                onClick={() => setCurrentPage(number)}
            >
                {number}
            </li>
        );
    });

    const handleDeleteProduct = async (productId) => {
        try {
            await publicRequest.delete(`products/${productId}`);
            setProducts(products.filter(product => product._id !== productId));
        } catch (err) {
            console.error("Failed to delete the product", err);
        }
    };

    return (
        <div className="panel_container">
            <h4>In the last 30 days.</h4>
            <div className="grid3_admin">
                <Card data={totalPendingOrders} />
            </div>
            <h4>Create products</h4>
            <div className="header_panel">
                <p>Table of products</p>
                <div>
                    <button className="item" onClick={() => setShowModal(true)}>
                        <AiFillPlusCircle className="icon" /> Add product
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Unity Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems?.map((item) => (
                        <tr key={item._id}>
                            <td className="size_img"><img src={item.image} alt="product" /></td>
                            <td>{item.title}</td>
                            <td>{item.unityPrice} €</td>
                            <td>
                                <AiFillEdit className="icon edit-icon"
                                    onClick={() => {
                                        setShowEditModal(true)
                                        setReceiveData(item)
                                    }} />
                                <AiFillDelete className="icon delete-icon" onClick={() => handleDeleteProduct(item._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button>Previous page</button>
                <ul id="page-numbers">{renderPageNumbers}</ul>
                <button>Next page</button>
            </div>
            {showModal && (<AddProduct setShowModal={setShowModal} setProducts={setProducts} />)}
            {showEditModal && (<EditProduct Data={receivedata} setShowEditModal={setShowEditModal} setProducts={setProducts} />)}
        </div>
    );
};

export default Items;
