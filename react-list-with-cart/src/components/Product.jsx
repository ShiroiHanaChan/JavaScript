import React from 'react';

function Product(props) {

    const {image:{desktop:picture}, name, category, price} = props;

    return (
        <section className="product-card">
            <div>
                <img src={picture} alt={name}/>
                <button className="resting">
                    <figure><img src="./../assets/icon-add-to-cart.svg" alt=""/></figure>
                    Add to Cart
                </button>
            </div>
            <h2>{category}</h2>
            <p><b>{name}</b></p>
            <p>{price}€</p>
        </section>
    );
}

export default Product;