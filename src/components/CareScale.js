import sun from '../assets/sun.svg';
import water from '../assets/water.svg';


function CareScale({scaleValue, careType} ) {
    const range = [1,2,3];
    
    const ScaleType = careType === "light" ? (<img src={sun} alt='sun-icon' />) 
    : (<img src={water} alt='water-icon' />);
    return(
        <div>
            {range.map((rangeElem)=>
                scaleValue >= rangeElem? <span key = {rangeElem.toString()}>
                    {ScaleType}
                </span> : null)}
            
        </div>
        )
}
    
export default CareScale
