import { useContext } from "react";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from "../utilities/firebaseConfig";

const PurchaseSummary = () => {
    const { calcItemsQty, sumProducts, cartList, clearList } = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = cartList.map(item => ({
            id: item.idItem,
            tittle: item.tittleItem,
            price: item.priceItem,
            qty: item.qtyItem
          }));

          cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });
        
        
        let order = {
            buyer:{
                name:"Sebastian",
                email:"sebastian@mail.com",
                phone:"23456789"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: sumProducts()
            
        };
        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }
        
          createOrderInFirestore()
            .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
            .catch(err => console.log(err));
        
          clearList();
    }

    return(
        <section className="container d-flex justify-content-center mb-5">
            <div className="cart_resumen">
                <h3>Resumen de compra</h3>
                <div className="d-flex justify-content-between">
                    <span>Cant. de productos:</span>
                    <span>{calcItemsQty()} item/s</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Envío:</span>
                    <span className="text-success">GRATIS</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>TOTAL:</span>
                    <span>${sumProducts()}</span>
                </div>
                <div className="text-center">
                    <button onClick={createOrder} className="btn_terminar-compra">Terminar mi compra</button>
                </div>
            </div>
        </section>
    );
}

export default PurchaseSummary;