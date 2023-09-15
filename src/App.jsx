
import './App.css'
import Shoppingcart from './Components/Shoppingcart/Shoppingcart'
import Course from './Components/course/course'

function App() {


  return (
    <>
      <h1 className=" flex text text-center font-bold   text-2xl" > Course Registration</h1>

      <div className="flex" >
        <div className="flex" >
          <Course></Course>

        </div>

        <div>
          <Shoppingcart></Shoppingcart>
        </div>
      </div>
    </>
  )
}

export default App
