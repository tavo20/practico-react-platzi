import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '../context/AppContext';


const OrderItem = ({ product }) => {

	const { removeProduct  } = useContext(AppContext);

	const handleRemoveProduct = () =>  {
		removeProduct(product);
	}


	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[1]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={handleRemoveProduct} />
		</div>
	);
}

export default OrderItem;
