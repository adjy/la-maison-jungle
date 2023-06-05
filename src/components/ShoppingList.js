import { plantList } from '../datas/plantList'
import { useState } from 'react'
import PlantItem from './PlantItem'
import Categories from './Categories'

import '../styles/ShoppingList.css'

function ShoppingList({cart, updateCart}) {

    const [activeCategory, setActiveCategory] = useState('');

    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [] );

  

    function addToCart(name, price){
        const currentPlantAdded = cart.find((plant) => plant.name === name) ; // recher si la plante se trouve dans mon tableau
        
        if(currentPlantAdded){
            const cartFilterredCurrentPlant = cart.filter((plant) => plant.name !==name);  // Creer un nouveau tableau sans ma plante

            updateCart([
                // ajoute dans mon tableau le tableau des autres cart + mon cart en augementant la quantite
                ...cartFilterredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1} 
            ])
        }
        else
            updateCart([
                ...cart, {name, price, amount: 1} // ajoute ma nouvelle plante avec la qte de 1
            ])
    }


	return (
		<div className='lmj-shopping-list'>
			
                <Categories categories = {categories} setActiveCategory = {setActiveCategory} activeCategory = {activeCategory}/>
                
			<ul className='lmj-plant-list'>
           
                { plantList.map(({ id, cover, name, water, light, price, category }) => 
                    !activeCategory || activeCategory === category ? (
                        <div key = {id} >
                            <PlantItem
                            key={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button onClick={()=> addToCart(name, price)}>Ajouter </button>
                 </div> 
                    ) : null
         )}
			</ul>
		</div>
	)
}

export default ShoppingList
