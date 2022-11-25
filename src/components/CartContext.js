import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantityToAdd) => {
        let find = cartList.find(elem => elem.idItem === item.id);
        console.log(find);
        if (find === undefined) {
            setCartList([...cartList, 
                {
                    idItem: item.id,
                    imgItem: item.pictureUrl,
                    nameItem: item.tittle,
                    priceItem: item.price,
                    qtyItem: quantityToAdd
                }]);
        } else {
            find.qtyItem += quantityToAdd;        
        }
        console.log(cartList);
    }

    const clearList = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let filter = cartList.filter(item => item.idItem !== id);
        setCartList(filter);
    }

    const calcItemsQty = () => {
        let sum = 0;
        for (let key of cartList) {
            sum += key.qtyItem;
        }
        return sum;
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    }

    const sumProducts = () => {
        let array = cartList.map(item => calcTotalPerItem(item.idItem));
        let sum = array.reduce((acc, item) => acc = acc + item);
        return sum;
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clearList, removeItem, calcItemsQty , calcTotalPerItem, sumProducts }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;