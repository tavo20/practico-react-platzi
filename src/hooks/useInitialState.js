import { useState  } from "react";

const initialState ={
    cart : []
}

const useInitialState = () => {
    const [state, setState ] = useState(initialState);

    // payload is like a product
    const addToCart = (payload) => {
        console.log(state)
        setState({
            ...state,
            cart: [...state.cart, payload]
         })
    }

    const removeProduct = (payload) => {
        // let indexProduct = state.cart.findIndex((prod) => prod.id === payload.id)
        // if(indexProduct >= 0) {
            
        //     //  state.cart.splice(indexProduct, 1);
        //      console.log(indexProduct, state.cart)
        //      setState({
        //         ...state,
        //         cart: state.cart
        //      });
        // } else {
        //     console.log('No encontramos el producto', state.cart, payload )
        // }
        console.log('carritos antes del filtro', state.cart);
        setState({
            ...state,
            cart: state.cart.filter((prod) => prod.id !== payload.id)
         })
    }

    return {
        state,
        addToCart,
        removeProduct
    }
} 

export default useInitialState;