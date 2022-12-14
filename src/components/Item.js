import { Link } from "react-router-dom";

const Item = ({ tittle, price, picture, id }) => {
    return (
        <div className="card section_card card_bg">
            <img src={picture} className="card-img-top" alt=""></img>
            <hr />
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <span className="card-text">Precio: ${price}</span>
                <div className="d-flex mt-3">
                    <Link to={`/item/${id}`}><button className="btn_detalle">Ver Detalle</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;