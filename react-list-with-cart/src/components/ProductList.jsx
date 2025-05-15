import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import {path} from "../config.js";

function ProductList() {

    // Variables init
    const [dessert, setDessert] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(path);
                if (!response.ok)
                    throw new Error(`Data fetch error! ${response.status}`);
                const data = await response.json();
                setDessert(data);
            } catch (error) {
                console.log('ProductList fetch error:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading === false) return (
        <>
            {dessert.map(item => (
                <Product
                    key={item.id || item.name}
                    image={item.image.desktop}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                />
            ))}
        </>
    );
}

export default ProductList;