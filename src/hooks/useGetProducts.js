import React, { useEffect, useState} from 'react'
import axios from 'axios';
 const  useGetProducts = (API) => {

    // const API = 'https://api.escuelajs.co/api/v1/products';
	const [products, setProducts] = useState([]);
	useEffect(async () => {
		try {
			const response = await axios(API);
			console.log('response', response);
			setProducts(response.data);

		} catch(err) {
			console.error(`Error al obtener la data`, err.message);
		}
	}, []);
    return products
}

export default useGetProducts;
