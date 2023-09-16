
import { useState } from 'react'
import './App.css'
import Shoppingcart from './Components/Shoppingcart/Shoppingcart'
import Course from './Components/course/course'
import subject from './Components/subject/subject';

function App() {
  const [shoppingcart, setshoppingcart] = useState([]);
  const handleAddToShoppingcart = subject => {
    const newShopcart = [...shoppingcart, subject];
    setshoppingcart(newShopcart);
  }
  return (
    <>
      <h1 className=" flex justify-center font-bold   text-4xl" > Course Registration</h1>

      <div className="flex" >
        <div className="flex" >
          <Course handleAddToShoppingcart={handleAddToShoppingcart} ></Course>
        </div>
        <div>
          <Shoppingcart shoppingcart={shoppingcart} ></Shoppingcart>
        </div>
      </div>
    </>
  )
}
export default App
