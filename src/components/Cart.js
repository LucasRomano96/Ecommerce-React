import { useContext } from "react";
import { CartContext } from "./CartContext";
import BtnStore from "./BtnStore"
import image from "../images/Icono/Logo-Ecommerce.png";
import { Link } from "react-router-dom";
import PurchaseSummary from "./PurchaseSummary";


const Cart = () => {
    const { cartList, clearList, removeItem, calcTotalPerItem, } = useContext(CartContext);

    return(
        <>  
            {
                cartList.length === 0 

                ? <section className="container cart_height">
                        <div className="d-flex align-items-center cart_container">
                            <div className="cart_image">
                                <img src={image}></img>
                            </div>
                            <div className="cart_text-container">
                                <h3>¡Ups! Todavía no has agregado productos al carrito.</h3>
                                <div className="text-center mt-4">
                                    <BtnStore />
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    : <><section className="container cart_height2">
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-flex justify-content-start">
                                <Link to="/category/all"><button className="cart_button-clear">Volver a Tienda</button></Link>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button onClick={clearList} className="cart_button-clear">Vaciar Carrito</button>
                            </div>
                        </div>
                        
                        <div className="cart_list">
                            {cartList.map((item) => 
                                <div key={item.idItem}>
                                    <div className="d-flex img_cart">
                                        <img src={item.imgItem}></img>
                                        <div>
                                            <span><b>Producto: </b>{item.nameItem}</span>
                                            <span><b>Precio: </b>${item.priceItem} c/u</span>
                                            <span><b>Cantidad: </b>{item.qtyItem} item/s</span><br />
                                            <div className="cart_list-total">
                                                <span className="fs-5"><b>Precio Total:</b> ${calcTotalPerItem(item.idItem)} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="cart_remove-item" onClick={() => removeItem(item.idItem)}>Eliminar</button>
                                    </div>
                                    
                                    <hr />
                                </div>)}
                        </div>
                    </section>
                    
                    <PurchaseSummary />
                    </>
                }
        </>
    )
}

export default Cart;