import React, { useState, useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
const ProductItem = ({ product }) => {

	const { addToCart } = useContext(AppContext);

	// const [car, setCar] = useState([]);
	const handleClick = (productItem) => {
		console.log('Se ejecuta', productItem);
		addToCart(productItem);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[1]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={product.images[0]} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
