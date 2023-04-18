import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'



function App() {
  

  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;



// function App() {
  

//   return (
//     <div>
//       <Banner />
//       <Cart />
//       <ShoppingList />
//     </div>
//   );
// }