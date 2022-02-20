import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';


const ProductList = () => {
    const API = 'https://api.escuelajs.co/api/v1/products';

	let products = useGetProducts(API);
	console.log({ products });
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product) => (

					// <h1>hola</h1>
					<ProductItem product={product} key={product.id}></ProductItem>
				))}
			</div>
		</section>
	);
}

export default ProductList;
