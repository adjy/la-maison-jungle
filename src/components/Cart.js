import "../styles/Cart.css"
function Cart(){
    const monsterePrix = 8;
    const lierrePrix = 10;
    const FleursPrix = 15;

    const prixTotal = monsterePrix + lierrePrix + 
    FleursPrix;

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera: {monsterePrix}€</li>
                <li>Liere: {lierrePrix}€</li>
                <li>Fleurs: {FleursPrix}€</li>
            </ul>
            Total : {prixTotal}€
        </div>
    )

}

export default Cart