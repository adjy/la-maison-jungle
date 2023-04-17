// import "../styles/Banner.css"
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
const categories = [];

plantList.forEach(element => {
    
    if(!categories.includes(element.category))
        categories.push(element.category);
});

function inSolde(element){
    return element && <div className='lmj-sales'> Soldes </div>;
}


function ShoppingList(){
    
    return (
        <div>
            <ul>
                {categories.map((cat) =>(
                    <li key = {cat}>{cat}</li>
                ))}
            </ul>
            
            <ul className='lmj-list'>
                {plantList.map((plant) =>(
                    <li key = {plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {inSolde(plant.isSpecialOffer)}
                    
                    </li>
                ))}
           
            </ul>
        </div>

    );
}

export default ShoppingList