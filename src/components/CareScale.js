import sun from '../assets/sun.svg';
import water from '../assets/water.svg';


function CareScale({scaleValue, careType} ) {
    const range = [1,2,3];
    
    const ScaleType = careType === "light" ? (<img src={sun} alt='sun-icon' />) 
    : (<img src={water} alt='water-icon' />);


    function handleClick() {
        const typeDeCare = careType === "light" ? "de lumière" : "d'arrosage";
        const val = ['peu','modérement','beaucoup'];

        const Sortie = val[ (scaleValue - 1)] ;
        alert(`Cette plante requiert ${Sortie} ${typeDeCare}`)
    }


    return(
        <div onClick={() => handleClick()}>
            {range.map((rangeElem)=>
                scaleValue >= rangeElem? (<span key = {rangeElem.toString()}>
                    {ScaleType}
                </span>) : null)}
            
        </div>
        );
}
    
export default CareScale
