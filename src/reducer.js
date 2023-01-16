const reducer =(state,action)=>{

    if(action.type === 'CLEAR_CART')
    {
        return {...state,cart:[]}
    }
    if(action.type ==='REMOVE'){

        return {...state,cart:
        state.cart.filter((CartItem)=>CartItem.id
        !== action.payload
        )
        }
    }

    //ONEFUNCTION FOR INCREASE & DECREASE

    // if (action.type === 'TOGGLE_AMOUNT') {
    //     let tempCart = state.cart
    //       .map((cartItem) => {
    //         if (cartItem.id === action.payload.id) {
    //           if (action.payload.type === 'inc') {
    //             return { ...cartItem, amount: cartItem.amount + 1 }
    //           }
    //           if (action.payload.type === 'dec') {
    //             return { ...cartItem, amount: cartItem.amount - 1 }
    //           }
    //         }
    //         return cartItem
    //       })
    //       .filter((cartItem) => cartItem.amount !== 0)
    //     return { ...state, cart: tempCart }
    //   }
    //   throw new Error('no matching action type')
    // }




    if(action.type === 'INCREASE'){
        let addCart = state.cart.map((CartItem)=>{
            if(CartItem.id === action.payload)
            {
                return {...CartItem,amount: CartItem.amount + 1}
            }
            return CartItem       
        })
        return {...state,cart:addCart}
    }
    if(action.type === 'DECREASE'){
        let addCart = state.cart.map((CartItem)=>{
            if(CartItem.id === action.payload)
            {
                return {...CartItem,amount: CartItem.amount - 1}
            }
            return CartItem       
        })
        return {...state,cart:addCart}
    }

    if (action.type === 'GET_TOTAL'){

        let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{

            const {price,amount} = cartItem
            const itemTotal = price * amount

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal
        },{
            total:0,
            amount:0,
        })


        total = parseFloat(total.toFixed(2))

        return {...state,total,amount}

    }
    if(action.type === 'LOADING'){

        return {...state, loading:true}
    }
    if(action.type === 'DISPLAY_ITEMS'){

        return {...state, cart:action.payload,loading:false}
    }



    return state
}

export default reducer;