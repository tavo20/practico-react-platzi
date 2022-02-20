import React, { useContext, useState, useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';


const MyOrder = () => {
 	const { state } = useContext(AppContext);
	 console.log('state MyOrder', state);
	 const [total, setTotal] = useState(0);

	 useEffect(() => {
		 console.log('ENTRA AL use-effect')
		 const totalProducts = ({products}) => {
			if(!products && !products.length) {
				return
			}
			let totalSum = 0
			products.forEach(element => {
				totalSum += element.price
			});
			console.log({ total })
			setTotal(totalSum);
		 }
		 totalProducts({ products: state.cart })
	 }, [state.cart]) 
	

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="./../assets/icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => 
					<OrderItem key={`orderItem-${product.id}`} product={product} />
				)}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${total}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
