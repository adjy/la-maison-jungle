// import "../styles/Banner.css"
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
// import CareScale from './CareScale';
import PlantItem from './PlantItem';
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
            
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light}  ) =>(
                    <PlantItem 
                        name = {name}
                        id = {id}
                        cover = {cover}
                        water = {water}
                        light={light}
                    />
                    // <li key = {plant.id} className='lmj-plant-item'>
                    //     {plant.name}
                    //     {inSolde(plant.isSpecialOffer)}
                    //     {/* <CareScale scaleValue={plant.light} /> */}
                    //     <CareScale careType='water' scaleValue={plant.water} />
                    //     <CareScale careType='light' scaleValue={plant.light} />
                    // </li>
                ))}
           
            </ul>
        </div>

    );
}

export default ShoppingList