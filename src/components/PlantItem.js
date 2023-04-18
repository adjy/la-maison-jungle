import CareScale from './CareScale';
import '../styles/PlantItem.css'

function PlantItem({name, cover, id, light, water} ) {

    return(
        <div>
            <li key = {id} className='lmj-plant-item'>
                <img className='lmj-plant-item-cover' src ={cover} alt = {name} />
                {name}
                <CareScale careType='water' scaleValue={water} />

                <CareScale careType='light' scaleValue={light} />

            
            </li>
             
            
        </div>
        )
}
    
export default PlantItem

{/* <li key = {plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {/* <CareScale scaleValue={plant.light} /> */}
                    // </li> */}